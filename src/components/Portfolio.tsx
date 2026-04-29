"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "Pristine Lawn Care",
    category: "Yard Maintenance",
    image: "https://images.unsplash.com/photo-1764969370921-7c8df49171cd?q=80&w=2940&auto=format&fit=crop", // A freshly mown lawn in a sunny park
  },
  {
    id: 2,
    title: "Large Oak Pruning",
    category: "Tree Trimming",
    image: "https://images.unsplash.com/photo-1754322449185-31f56117ed87?q=80&w=2940&auto=format&fit=crop", // A tree arborist is cutting a branch
  },
  {
    id: 3,
    title: "Complete Transformation",
    category: "Full Yard Remodel",
    image: "https://images.unsplash.com/photo-1768333222242-605fc80d86d9?q=80&w=2940&auto=format&fit=crop", // Lush green garden with manicured hedges and trees
  },
  {
    id: 4,
    title: "Garden Overhaul",
    category: "Full Yard Remodel",
    image: "https://images.unsplash.com/photo-1758790122077-499214dc8396?q=80&w=2940&auto=format&fit=crop", // Lush green garden with trees and plants behind fence
  },
  {
    id: 5,
    title: "Seasonal Cleanup",
    category: "Yard Maintenance",
    image: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?q=80&w=2940&auto=format&fit=crop", // a man using a lawn mower to cut grass
  },
  {
    id: 6,
    title: "Canopy Thinning",
    category: "Tree Trimming",
    image: "https://images.unsplash.com/photo-1767642321050-23f637b1f0be?q=80&w=2940&auto=format&fit=crop", // Arborist trimming tree branches with chainsaw from a lift
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-green-500 tracking-widest uppercase mb-3">Our Recent Work</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Excellence in Landscape Design
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of the stunning outdoor spaces we've created for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-md h-[450px] bg-gray-200" // Set height for portrait style
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-green-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-white text-2xl font-bold">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
