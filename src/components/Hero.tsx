"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100vh] bg-gradient-to-br from-[#e0f2fe] to-[#f8fafc] px-4 text-center">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4"
      >
        Elevate Your Digital Presence
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg sm:text-xl text-gray-700 max-w-2xl"
      >
        We build stunning websites, apps & marketing strategies to grow your business.
      </motion.p>

      {/* Scroll Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-10"
      >
        <Link
          href="#services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-base font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Explore Services
          <ChevronDown className="animate-bounce w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
