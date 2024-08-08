"use client";

import React from "react";
import { motion } from "framer-motion";

interface SlideBarsProps {
  children: React.ReactNode[];
  delay: number;
  className?: string;
  typeFrom: "right" | "left";
}

export default function SlideBars({
  children,
  delay,
  className,
  typeFrom,
}: SlideBarsProps) {
  return (
    <div className={className}>
      {children.map((child, idx) => (
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            translateX: `${typeFrom === "left" ? "100px" : "-100px"}`,
          }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: idx * 0.15 + 0.2 + delay,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
