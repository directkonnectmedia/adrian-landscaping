"use client";

import { Award, MapPin, CalendarClock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const valueProps = [
  {
    icon: <Award className="w-8 h-8 text-green-500" />,
    title: "Expert Quality",
    description: "Premium materials and meticulous craftsmanship built to stand the test of time.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-500" />,
    title: "Locally Owned",
    description: "Proudly serving our community with deep knowledge of local soil and climate.",
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-green-500" />,
    title: "On-Time Completion",
    description: "We respect your time and deliver beautiful results exactly when promised.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Free On-Site Estimates",
    description: "No hidden fees. We provide honest, upfront pricing for your peace of mind.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Why Adrian Landscaping?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're ready to show you why we're the go-to choice for premium outdoor spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full shadow-sm border border-green-100 mb-6 group-hover:scale-110 transition-transform">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
