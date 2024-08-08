"use client";

import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  className?: string;
  delay: number;
  typeFrom?: "bottom" | "top";
  transition?: number;
  children: React.ReactNode;
  once: boolean;
}

export default function FadeIn({
  children,
  delay,
  className,
  transition,
  typeFrom = "top",
  once = true,
}: FadeInProps) {
  if (typeFrom === "top") {
    return (
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ amount: 0.3, once }}
        transition={{ ease: "easeInOut", duration: transition, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  } else if (typeFrom === "bottom") {
    return (
      <motion.div
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ amount: 0.3, once }}
        transition={{ ease: "easeInOut", duration: transition, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
}
