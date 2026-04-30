"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  rotation: number;
  scale: number;
}

export default function AnimatedTree() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport so falling distances scale properly on mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    // Generate a set of leaves periodically, scaled for the device.
    const interval = setInterval(() => {
      setLeaves((prev) => {
        // Spawn leaf from random position in the left side of the canopy
        const startX = 20 + Math.random() * 30;
        const startY = 10 + Math.random() * 40;

        // Mobile uses smaller fall distances so leaves stay near the tree
        const driftMin = isMobile ? 60 : 150;
        const driftRange = isMobile ? 140 : 350;
        const fallMin = isMobile ? 100 : 200;
        const fallRange = isMobile ? 250 : 500;

        const newLeaf: Leaf = {
          id: Date.now() + Math.random(),
          startX,
          startY,
          endX: -driftMin - Math.random() * driftRange,
          endY: fallMin + Math.random() * fallRange,
          duration: 4 + Math.random() * 5,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5,
        };
        return [...prev, newLeaf].slice(-15); // Keep up to 15 leaves on screen
      });
    }, isMobile ? 700 : 500); // Slightly less frequent on mobile to stay smooth

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 z-20">
      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: leaf.scale }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, leaf.endX * 0.3, leaf.endX * 0.7, leaf.endX],
            y: [0, leaf.endY * 0.2, leaf.endY * 0.6, leaf.endY],
            rotate: [0, leaf.rotation, leaf.rotation * 2, leaf.rotation * 3],
          }}
          transition={{
            duration: leaf.duration,
            ease: "linear",
          }}
          className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 z-0 pointer-events-none drop-shadow-md"
          style={{ 
            left: `${leaf.startX}%`, 
            top: `${leaf.startY}%`,
            originX: 0.5, 
            originY: 0.5 
          }}
        >
          {/* Leaf SVG */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-green-500 fill-current">
            <path d="M12 2C8 2 4 6 4 12C4 18 10 22 12 22C14 22 20 18 20 12C20 6 16 2 12 2Z" />
            <path d="M12 22V12" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}

      {/* The Animated Tree SVG */}
      <motion.svg
        animate={{
          rotate: [0, 1.5, -1, 0],
          skewX: [0, -1, 0.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full z-10 drop-shadow-2xl overflow-visible"
        style={{ transformOrigin: "bottom center" }}
      >
        {/* Roots */}
        <path d="M45 90 C35 95, 25 98, 20 100 C35 98, 43 95, 45 90 Z" fill="#5D4037" />
        <path d="M55 90 C65 95, 75 98, 80 100 C65 98, 57 95, 55 90 Z" fill="#5D4037" />
        <path d="M40 90 C30 92, 20 95, 15 97 C25 96, 35 92, 40 90 Z" fill="#4E342E" />

        {/* Trunk */}
        <path d="M43 95 C45 60, 48 40, 50 20 C52 40, 55 60, 57 95 Z" fill="#5D4037" />
        <path d="M43 95 C45 60, 48 40, 50 20 C50 40, 50 60, 50 95 Z" fill="#4E342E" />
        
        {/* Branches */}
        <path d="M50 50 C40 45, 30 40, 25 30" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M50 40 C60 35, 70 30, 75 20" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M50 30 C45 25, 40 20, 35 15" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M50 25 C55 20, 60 15, 65 10" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Canopy / Leaves */}
        {/* Back Layer */}
        <circle cx="50" cy="35" r="28" fill="#1B5E20" />
        <circle cx="30" cy="45" r="22" fill="#1B5E20" />
        <circle cx="70" cy="45" r="22" fill="#1B5E20" />
        <circle cx="35" cy="25" r="18" fill="#1B5E20" />
        <circle cx="65" cy="25" r="18" fill="#1B5E20" />
        
        {/* Middle Layer */}
        <circle cx="50" cy="30" r="24" fill="#2E7D32" />
        <circle cx="35" cy="40" r="20" fill="#2E7D32" />
        <circle cx="65" cy="40" r="20" fill="#2E7D32" />
        <circle cx="40" cy="20" r="16" fill="#2E7D32" />
        <circle cx="60" cy="20" r="16" fill="#2E7D32" />
        
        {/* Front Layer (Highlights) */}
        <circle cx="48" cy="25" r="18" fill="#4CAF50" />
        <circle cx="38" cy="35" r="14" fill="#4CAF50" />
        <circle cx="62" cy="35" r="14" fill="#4CAF50" />
        <circle cx="42" cy="15" r="12" fill="#4CAF50" />
        <circle cx="58" cy="15" r="12" fill="#4CAF50" />
        
        {/* Extra details (small leaf clusters) */}
        <circle cx="25" cy="35" r="10" fill="#4CAF50" />
        <circle cx="75" cy="35" r="10" fill="#4CAF50" />
        <circle cx="30" cy="55" r="12" fill="#2E7D32" />
        <circle cx="70" cy="55" r="12" fill="#2E7D32" />
      </motion.svg>
    </div>
  );
}
