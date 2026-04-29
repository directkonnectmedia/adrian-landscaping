"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailLeaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  drift: number;
  fall: number;
  duration: number;
  color: string;
}

const FALL_COLORS = [
  "#EA580C", // Burnt orange
  "#F97316", // Orange
  "#FB923C", // Light orange
  "#D97706", // Amber dark
  "#B45309", // Bronze
  "#92400E", // Deep autumn brown
  "#FACC15", // Gold yellow
  "#CA8A04", // Mustard
];

// Generate a unique id
let leafIdCounter = 0;
const nextId = () => ++leafIdCounter;

export default function LeafCursorTrail() {
  const [leaves, setLeaves] = useState<TrailLeaf[]>([]);
  const lastMoveTime = useRef<number>(0);
  const lastSpawnTime = useRef<number>(0);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Spawn a leaf at given position
  const spawnLeaf = useCallback((x: number, y: number) => {
    const newLeaf: TrailLeaf = {
      id: nextId(),
      x,
      y,
      rotation: Math.random() * 720 - 360,
      scale: 0.6 + Math.random() * 0.7,
      drift: (Math.random() - 0.5) * 200, // Horizontal drift
      fall: 100 + Math.random() * 200, // Vertical fall
      duration: 2 + Math.random() * 2.5,
      color: FALL_COLORS[Math.floor(Math.random() * FALL_COLORS.length)],
    };
    setLeaves((prev) => [...prev.slice(-40), newLeaf]); // Keep max 40 to maintain perf
  }, []);

  // Cleanup expired leaves periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setLeaves((prev) => {
        // Remove leaves older than 5 seconds (assumed expired)
        const now = Date.now();
        return prev.filter((l) => now - l.id < 5000);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      lastMoveTime.current = now;

      // Only spawn leaf if cursor has moved enough distance and enough time has passed
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (now - lastSpawnTime.current > 60 && distance > 15) {
        spawnLeaf(e.clientX, e.clientY);
        lastSpawnTime.current = now;
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [spawnLeaf]);

  // Don't render on touch / mobile devices to avoid hijacking interaction
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(hover: none)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{
              opacity: 1,
              x: leaf.x,
              y: leaf.y,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              opacity: [1, 1, 0],
              x: [leaf.x, leaf.x + leaf.drift * 0.5, leaf.x + leaf.drift],
              y: [leaf.y, leaf.y + leaf.fall * 0.4, leaf.y + leaf.fall],
              scale: [0, leaf.scale, leaf.scale * 0.9],
              rotate: [0, leaf.rotation * 0.5, leaf.rotation],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: leaf.duration,
              ease: "easeOut",
              times: [0, 0.4, 1],
            }}
            className="absolute top-0 left-0 will-change-transform"
            style={{
              transform: `translate(-50%, -50%)`,
            }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
            >
              {/* Maple-style fall leaf */}
              <path
                d="M16 2 C 18 8, 22 8, 26 6 C 24 10, 25 14, 28 16 C 23 16, 20 19, 21 24 C 18 22, 14 22, 11 24 C 12 19, 9 16, 4 16 C 7 14, 8 10, 6 6 C 10 8, 14 8, 16 2 Z"
                fill={leaf.color}
              />
              {/* Stem */}
              <path
                d="M16 24 L16 30"
                stroke={leaf.color}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Vein detail */}
              <path
                d="M16 6 L16 22 M10 14 L16 18 L22 14"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
