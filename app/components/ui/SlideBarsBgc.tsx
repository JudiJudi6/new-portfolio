"use client";

import { motion } from "framer-motion";
import React from "react";

interface SlideBarsBgcProps {
  children: React.ReactNode[];
  delay: number;
  className?: string;
  typeFrom: "right" | "left";
  add: string;
}

export default function SlideBarsBgc({
  children,
  delay,
  className,
  typeFrom,
  add,
}: SlideBarsBgcProps) {
  return (
    <div className={className}>
      {children.map((child, idx) => (
        <motion.div
          key={idx + add}
          initial={{
            opacity: 0,
            translateX: `${typeFrom === "left" ? "100px" : "-100px"}`,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: idx * 0.15 + 0.2 + delay,
          }}
          exit={{
            opacity: 0,
            translateX: `${typeFrom === "left" ? "-100px" : "100px"}`,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
