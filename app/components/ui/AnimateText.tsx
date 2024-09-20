"use client";

import React, { useEffect, useRef, useState } from "react";
import { cubicBezier, motion, MotionStyle } from "framer-motion";
import clsx from "clsx";

interface AnimateTextProps {
  children: React.ReactNode;
  className: string;
  transition: number;
  delay: number;
  style?: MotionStyle;
  bgColor?: "white" | "black";
  once?: boolean;
}

export default function AnimateText({
  children,
  className,
  delay,
  transition,
  style,
  bgColor = "white",
  once = true,
}: AnimateTextProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [lines, setLines] = useState(0);
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (divRef.current) {
      const computedStyle = window.getComputedStyle(divRef.current);
      const lh = computedStyle.lineHeight;
      setLineHeight(+lh.replace("px", ""));
      const height = computedStyle.height;
      setLines(Math.floor(+height.replace("px", "") / +lh.replace("px", "")));
    }
  }, [children]);

  useEffect(() => {
    const newElements = [];
    for (let i = 0; i < lines; i++) {
      newElements.push(
        <motion.div
          key={i}
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: once, amount: 0.9 }}
          transition={{
            duration: transition,
            ease: cubicBezier(0.5, 1.1, 1, 1),
            delay: delay,
          }}
          className={clsx(
            "origin-bottom  w-full z-10",
            bgColor === "white" ? "bg-white" : "bg-black"
          )}
          style={{ height: lineHeight }}
        />
      );
    }
    setElements(newElements);
  }, [lineHeight, lines, delay, transition, bgColor]);

  return (
    <motion.div className={className} style={style}>
      <div className="relative">
        <div className="block" ref={divRef}>
          {children}
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
          {elements}
        </div>
      </div>
    </motion.div>
  );
}
