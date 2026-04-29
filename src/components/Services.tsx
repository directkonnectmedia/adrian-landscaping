"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "maintenance",
    title: "Yard Maintenance",
    description: "Keep your outdoor space looking pristine year-round. Our comprehensive maintenance plans ensure your property is always ready for your next gathering.",
    features: ["Weekly/Bi-weekly Mowing", "Weed Control", "Seasonal Cleanups"],
    image: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?q=80&w=2940&auto=format&fit=crop", // Landscaper using a lawn mower to cut grass
    reverse: false,
  },
  {
    id: "tree-trimming",
    title: "Tree Trimming",
    description: "Expert tree care to ensure the health and beauty of your landscape. We handle pruning, shaping, and safe removal of overgrown branches.",
    features: ["Precision Pruning", "Canopy Thinning", "Deadwood Removal"],
    image: "https://images.unsplash.com/photo-1767642321050-23f637b1f0be?q=80&w=2940&auto=format&fit=crop", // Arborist trimming tree branches with chainsaw from a lift
    reverse: true,
  },
  {
    id: "remodel",
    title: "Full Yard Remodel",
    description: "Contact us today for a full Yard Remodel. Tell us what you want, and Adrian can give you his input and we can get something started for you.",
    features: ["Custom Design Plans", "Hardscaping & Softscaping", "Complete Transformations"],
    image: "https://images.unsplash.com/photo-1764208637294-49d0eccacf40?q=80&w=2940&auto=format&fit=crop", // Lush green garden with mature trees and manicured lawn
    reverse: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-green-500 tracking-widest uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Everything Your Yard Needs
          </h3>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                service.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* Portrait style photo container */}
                <div className="relative h-[600px] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                </div>
              </div>

              {/* Text Section (Black Background, White Text) */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900 p-8 sm:p-10 rounded-2xl shadow-xl space-y-8 relative overflow-hidden">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                  
                  <h4 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-200 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link
                      href="#quote"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-md font-semibold transition-colors group"
                    >
                      Get a Free Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
