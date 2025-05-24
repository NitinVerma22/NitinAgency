"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "We craft blazing-fast, SEO-optimized websites using modern stacks like Next.js, Tailwind, and TypeScript.",
    image: "https://via.placeholder.com/400x250?text=Web+Development",
  },
  {
    title: "App Development",
    description:
      "From concept to launch, we build high-performance Android/iOS apps tailored to your goals.",
    image: "https://via.placeholder.com/400x250?text=App+Development",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your brand online with our strategic SEO, Google Ads, and content marketing campaigns.",
    image: "https://via.placeholder.com/400x250?text=Digital+Marketing",
  },
  {
    title: "Social Media Management",
    description:
      "We build and manage social media strategies that boost engagement and conversions.",
    image: "https://via.placeholder.com/400x250?text=Social+Media",
  },
  {
    title: "SEO Optimization",
    description:
      "Rank higher on search engines and attract more traffic with our proven SEO strategies.",
    image: "https://via.placeholder.com/400x250?text=SEO+Optimization",
  },
  {
    title: "Graphic Design",
    description:
      "From logos to brochures, we deliver visually captivating designs that communicate your brand effectively.",
    image: "https://via.placeholder.com/400x250?text=Graphic+Design",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We provide all the essential services to help businesses grow in the digital space.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
