"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1726597903368-37d79bb01d95?q=80&w=2940&auto=format&fit=crop')", // Public park filled with lots of green grass and lots of trees
        }}
      >
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 drop-shadow-lg"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl">🌳</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            Adrian Landscaping
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 drop-shadow-md font-medium"
        >
          Expert landscaping, yard maintenance, and full remodels designed to transform your yard into a breathtaking oasis.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="#quote"
            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-md font-bold text-lg transition-all shadow-lg flex items-center justify-center group"
          >
            Request a Free Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-md font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
          >
            View Our Services
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Curve (Optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-100 z-10"></div>
    </section>
  );
}
