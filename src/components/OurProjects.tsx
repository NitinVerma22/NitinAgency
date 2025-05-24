"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const leftProjects = [
  {
    src: "/images/project1.jpeg",
    text: "Royal Court",
    discription:
      "A luxurious residential project with modern amenities, spacious interiors, and elegant architecture, designed to provide a premium living experience in the heart of the city.",
  },
  {
    src: "/images/interior_design.jpg",
    text: "Modern Office",
    discription:
      "A state-of-the-art office complex featuring open workspaces, advanced infrastructure, and eco-friendly design, ideal for innovative businesses and startups.",
  },
  // {
  //   src: "/images/project3.jpg",
  //   text: "Eco Housing",
  //   discription:
  //     "An environmentally conscious housing development focused on sustainability, energy efficiency, and green living, offering a harmonious blend of comfort and nature.",
  // },
];

const rightProjects = [
  {
    src: "/images/hero1.jpeg",
    text: "Rustle Court",
    discription:
      "A premium residential enclave offering serene surroundings, modern facilities, and thoughtfully designed living spaces for a peaceful lifestyle.",
  },
  {
    src: "/images/interior3.jpg",
    text: "Corporate Tower",
    discription:
      "A landmark commercial building with cutting-edge amenities, flexible office layouts, and a prime location for thriving businesses.",
  },
  // {
  //   src: "/images/project6.jpg",
  //   text: "Minimalist Home",
  //   discription:
  //     "A contemporary home designed with minimalist aesthetics, open layouts, and functional spaces to promote simplicity and comfort.",
  // },
];

export default function OurProjects() {
  return (
    <section  id="projects" className=" py-16 bg-white px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Our Projects
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our diverse portfolio showcasing innovative designs and successful projects.
        </p>
      </div>
    
      
      {/* Project grid with engineer in middle */}
      <div className="max-w-7xl mx-auto px-4 pt-0 mt-0 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Column */}
        <div className="space-y-8 w-full md:w-1/3">
          {leftProjects.map((project, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.src}
                alt={project.text}
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-4 text-gray-700 font-medium">{project.text}</p>
              <p className="mt-2 text-gray-500 font-small">{project.discription}</p>

            </motion.div>
          ))}
        </div>

        {/* Center 3D Engineer Image */}
        <motion.div
          className="hidden md:flex items-center justify-center  w-1/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/engineer.png"
            alt="Engineer"
            width={500}
            height={1200}
            className="object-contain"
          />
        </motion.div>

        {/* Right Column */}
        <div className="space-y-8 w-full md:w-1/3">
          {rightProjects.map((project, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.src}
                alt={project.text}
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-56 hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-4 text-gray-700 font-medium">{project.text}</p>
              <p className="mt-2 text-gray-500 font-small">{project.discription}</p>
            </motion.div>
          ))}
        </div>
      </div>

  
    </section>
  );
}
