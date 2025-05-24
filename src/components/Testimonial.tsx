"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    position: "Founder, StartupX",
    image: "https://via.placeholder.com/100",
    quote:
      "Their team built our website and digital marketing plan from scratch. The results were outstanding and professional!",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    position: "CEO, BrandNest",
    image: "https://via.placeholder.com/100",
    quote:
      "I was amazed by the creativity and dedication. Our app now has thousands of downloads thanks to them!",
    rating: 4,
  },
  {
    name: "Mohit Jain",
    position: "Owner, JM Interiors",
    image: "https://via.placeholder.com/100",
    quote:
      "Top-class service. They delivered our SEO and social media goals perfectly. Highly recommend this team!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Real stories from real people we’ve helped succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-md p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" />
              <p className="text-gray-700 text-sm mb-4 italic">"{testimonial.quote}"</p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
