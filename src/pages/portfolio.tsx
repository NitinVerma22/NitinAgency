"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const categories = ["All", "Web Development", "App Development", "Digital Marketing", "Graphics Design"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    description: "A modern responsive e-commerce platform built with Next.js.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "Social Media App",
    category: "App Development",
    description: "Cross-platform app for sharing photos and chatting.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "SEO Boost for Startup",
    category: "Digital Marketing",
    description: "Increased organic traffic by 300% in 3 months.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 4,
    title: "Logo & Branding",
    category: "Graphics Design",
    description: "Minimalistic and professional branding suite.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web Development",
    description: "Clean and interactive personal portfolio site.",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-20 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-primary">Our Work</h1>
      <p className="text-center text-gray-600 mb-10">Explore our portfolio across various services.</p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={clsx(
              "px-4 py-1.5 text-sm rounded-full border",
              selectedCategory === cat
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 hover:bg-primary/10 border-gray-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{project.title}</h3>
                <p className="text-xs text-primary font-semibold mt-1">{project.category}</p>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
