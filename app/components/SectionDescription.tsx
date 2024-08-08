"use client";

import React from "react";
import { IoArrowDownSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";

interface SectionDescriptionProps {
  scrollY: number;
}

export default function SectionDescription({
  scrollY,
}: SectionDescriptionProps) {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center  px-4  pb-2 sm:px-6 sm:pb-4 max-w-[1500px]">
      <div className="flex flex-col justify-end items-end gap-2 mb-1 self-end">
        <div className="flex justify-center items-center gap-3">
          <div className="w-32 h-3 bg-black " />
          <div className="w-10 h-3 bg-black " />
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="w-12 h-3 bg-black " />
          <div className="w-3 h-3 bg-black " />
          <div className="w-12 h-3 bg-black" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="w-20 h-3 bg-black " />
        </div>{" "}
      </div>
      <div className="flex flex-col gap-32 px-4 sm500:px-20 sm400:text-lg sm600:text-xl sm:text-2xl md900:text-3xl xl:text-4xl">
        <motion.p style={{ translateY: (scrollY / 10) * -1 + 80 }}>
          I am Łukasz Michnik,{" "}
          <span className="font-semibold">a 20 years old guy</span> who decided
          to become a <span className="underlined">full stack developer</span>{" "}
          with node.js. I am currently learning web technologies{" "}
          <span className="font-semibold">for almost 2 years.</span>
        </motion.p>
        <motion.p style={{ translateY: (scrollY / 6) * -1 + 80 }}>
          I am also a <span className="underlined">student</span> at Rzeszów
          University of Technology in my{" "}
          <span className="font-semibold">third year.</span> In my free time, I
          like to build new projects and develop existing ones, not necessarily
          finish... but someday I will{" "}
          <span className="font-semibold">definitely finish</span> all of them
          ;)
        </motion.p>
      </div>
      <div className="pl-14 pb-10 px-4 sm500:px-20 self-start text-4xl sm400:text-6xl sm600:text-7xl ">
        <FadeIn delay={0.6} once={false} typeFrom="top" transition={0.4}>
          <IoArrowDownSharp />
        </FadeIn>
      </div>
    </section>
  );
}
