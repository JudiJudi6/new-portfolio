"use client ";

import { cubicBezier, motion } from "framer-motion";

interface SlideUpTextProps {
  text: string;
  as: "p" | "h1" | "h3";
  className?: string;
  delay: number;
  typeFrom?: "bottom" | "top";
  transition?: number;
}

export default function SlideUpText({
  text,
  as,
  delay,
  className,
  typeFrom = "bottom",
  transition = 0.3,
}: SlideUpTextProps) {
  const Element = motion[as];

  if (typeFrom === "bottom") {
    return (
      <Element className={className}>
        {text.split(" ").map((item, idx) => (
          <span key={idx} className="relative block">
            <motion.span
              initial={{ translateY: "100%" }}
              whileInView={{ translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: transition,
                ease: cubicBezier(0.5, 1.1, 1, 1),
                delay: idx * 0.15 + 0.2 + delay,
              }}
              className="block"
            >
              {item}&nbsp;
            </motion.span>
            <span
              className={`absolute block origin-right top-full left-0 bg-white w-full h-full z-[${idx}]`}
            ></span>
          </span>
        ))}
      </Element>
    );
  } else {
    return (
      <Element className={className}>
        {text.split(" ").map((item, idx) => (
          <span key={idx} className="relative block">
            <motion.span
              initial={{ translateY: "-100%" }}
              whileInView={{ translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: transition,
                ease: cubicBezier(0.5, 1.1, 1, 1),
                delay: idx * 0.15 + 0.2 + delay,
              }}
              className={`block`}
            >
              {item}&nbsp;
            </motion.span>
            <span
              className={`absolute block origin-right -top-full left-0 bg-white w-full h-full z-[${idx}]`}
            />
          </span>
        ))}
      </Element>
    );
  }
}
