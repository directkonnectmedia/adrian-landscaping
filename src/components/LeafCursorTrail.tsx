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

const GREEN_COLORS = [
  "#16A34A", // Vibrant green
  "#22C55E", // Grass green
  "#15803D", // Forest green
  "#166534", // Deep green
  "#4ADE80", // Light spring green
  "#65A30D", // Lime green
];

const FALL_COLORS = [
  "#EA580C", // Burnt orange
  "#F97316", // Orange
  "#FB923C", // Light orange
  "#D97706", // Amber dark
  "#FACC15", // Gold yellow
];

// Pick a color: ~85% green, ~15% orange/fall
const pickLeafColor = () => {
  if (Math.random() < 0.85) {
    return GREEN_COLORS[Math.floor(Math.random() * GREEN_COLORS.length)];
  }
  return FALL_COLORS[Math.floor(Math.random() * FALL_COLORS.length)];
};

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
      duration: 2.5 + Math.random() * 1.5, // 2.5-4 seconds total lifetime
      color: pickLeafColor(),
    };
    setLeaves((prev) => [...prev.slice(-50), newLeaf]); // Keep max 50 to maintain perf
  }, []);

  // Cleanup expired leaves periodically (use a Map to track spawn time)
  const spawnTimes = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setLeaves((prev) => {
        const filtered = prev.filter((l) => {
          const spawnTime = spawnTimes.current.get(l.id);
          if (!spawnTime) {
            spawnTimes.current.set(l.id, now);
            return true;
          }
          // Remove leaf 0.5s after its animation duration completes
          const lifetime = (l.duration + 0.5) * 1000;
          if (now - spawnTime > lifetime) {
            spawnTimes.current.delete(l.id);
            return false;
          }
          return true;
        });
        return filtered;
      });
    }, 1000);
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
              opacity: [1, 1, 1, 0],
              x: [leaf.x, leaf.x + leaf.drift * 0.5, leaf.x + leaf.drift, leaf.x + leaf.drift],
              y: [leaf.y, leaf.y + leaf.fall * 0.4, leaf.y + leaf.fall, leaf.y + leaf.fall],
              scale: [0, leaf.scale, leaf.scale * 0.95, leaf.scale * 0.85],
              rotate: [0, leaf.rotation * 0.5, leaf.rotation, leaf.rotation * 1.05],
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{
              duration: leaf.duration,
              ease: "easeOut",
              times: [0, 0.4, 0.65, 1],
            }}
            className="absolute top-0 left-0 will-change-transform"
            style={{
              transform: `translate(-50%, -50%)`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
            >
              {/* Oval leaf shape (matches the AnimatedTree logo leaves) */}
              <path
                d="M12 2C8 2 4 6 4 12C4 18 10 22 12 22C14 22 20 18 20 12C20 6 16 2 12 2Z"
                fill={leaf.color}
              />
              {/* Center vein/stem */}
              <path
                d="M12 22V12"
                stroke="rgba(0,0,0,0.35)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
