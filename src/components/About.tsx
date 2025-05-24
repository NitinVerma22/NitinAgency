"use client";

import { motion } from "framer-motion";
import { Users, Rocket, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Overview Row */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              About Our Agency
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are a results-driven digital agency helping startups, brands,
              and enterprises thrive online through tailored solutions in web
              development, apps, SEO, design & marketing.
            </p>
            <p className="text-gray-600 text-sm">
              We blend creativity, technology, and strategy to deliver digital
              experiences that drive measurable growth.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://via.placeholder.com/600x400?text=About+Us"
              alt="About Us"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Projects Delivered", value: "100+" },
            { label: "Years of Experience", value: "5+" },
            { label: "Happy Clients", value: "90+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md py-6"
            >
              <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-primary mb-2">
              Our Mission
            </h4>
            <p className="text-gray-600 text-sm">
              To empower businesses of all sizes with premium digital solutions
              that help them succeed in a connected world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-primary mb-2">
              Our Vision
            </h4>
            <p className="text-gray-600 text-sm">
              To be the go-to digital agency known for creativity, innovation,
              and long-term partnerships that drive real success.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-center text-2xl font-bold text-primary mb-6">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-blue-500 mx-auto" />,
                title: "Integrity",
                desc: "We are honest, transparent, and committed to what's best for our clients.",
              },
              {
                icon: <Rocket className="w-10 h-10 text-green-500 mx-auto" />,
                title: "Innovation",
                desc: "We constantly evolve, innovate and adapt to deliver cutting-edge solutions.",
              },
              {
                icon: <Users className="w-10 h-10 text-orange-500 mx-auto" />,
                title: "Collaboration",
                desc: "We believe in teamwork and value client collaboration at every step.",
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                {val.icon}
                <h4 className="mt-4 text-lg font-semibold text-primary">
                  {val.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
