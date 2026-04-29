"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Adrian Landscaping did an amazing job on our yard remodel. The attention to detail is incredible, and it has completely changed how we use our outdoor space. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Reed",
    role: "Local Resident",
    content: "The tree trimming service they provided was excellent. They were quick, professional, and cleaned up everything before leaving. It's rare to find this level of care.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Homeowner",
    content: "We wanted regular yard maintenance for our home, and the team delivered exactly what we needed. The grass is always a perfect vibrant green and the yard looks seamless.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-green-500 tracking-widest uppercase mb-3">Client Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            What Our Customers Say
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—see what your neighbors think.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col h-full relative"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-green-500 rounded-t-2xl"></div>

              <div className="flex text-yellow-400 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed flex-grow italic">
                "{testimonial.content}"
              </p>
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
