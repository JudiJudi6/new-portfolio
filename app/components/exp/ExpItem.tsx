"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface ExpItemProps {
  logoName: string;
  logoAlt: string;
  workPositon: string;
  workLink: string;
  workLinkLabel: string;
  timeMethod: string;
  time: string;
  timeDates: string;
}

export default function ExpItem({
  logoName,
  logoAlt,
  workPositon,
  workLink,
  workLinkLabel,
  timeMethod,
  time,
  timeDates,
}: ExpItemProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setMousePosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative group cursor-pointer"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => console.log("clicked")}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 bg-black z-10 origin-bottom"
        viewport={{ amount: 0.99 }}
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            className="absolute z-50 bg-white text-black w-24 h-8 text-center font-semibold pointer-events-none flex justify-center items-center"
            style={{
              left: mousePosition.x + 30,
              top: mousePosition.y - 8,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>See more</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col justify-start items-end">
        <h3 className="font-semibold text-xl sm400:text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-2 before:bg-white">
          {workPositon}
        </h3>
        <div className="flex justify-center items-center gap-3 mb-1  md:text-lg">
          <Link
            href={workLink}
            target="_blank"
            className="underline-before before:bg-white flex justify-center items-center gap-2"
          >
            {workLinkLabel}
            <span className="pt-1">
              <FaExternalLinkAlt size={10} />
            </span>
          </Link>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <p>{timeMethod}</p>
        </div>
        <div className="flex justify-center items-center gap-3 md:text-lg">
          <p className="">{timeDates}</p>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <p className="font-semibold">{time}</p>
        </div>
      </div>
    </div>
  );
}
