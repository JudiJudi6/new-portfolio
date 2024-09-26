import React from "react";
import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { IoArrowDownSharp } from "react-icons/io5";

export default function SectionSkills({ scrollY }: { scrollY: number }) {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center px-4 pt-8 pb-2 sm:px-6 sm:pb-4 max-w-[1500px] mx-auto">
      <div></div>
      <motion.div className="font-semibold tracking-wide max-w-[800px] text-center uppercase">
        <motion.p
          className="text-sm sm500:text-lg font-normal  "
          viewport={{ amount: 0.9 }}
          initial={{ translateX: "8%", opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          The best
        </motion.p>
        <motion.div
          className="flex justify-center items-end"
          viewport={{ amount: 0.9 }}
          initial={{ translateX: "8%", opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-white mb-[10px] sm:mb-[13px] lg:mb-[17px] mr-1 hidden sm600:block"></div>
          <h3 className="text-3xl sm400:text-4xl sm500:text-5xl sm600:text-6xl sm:text-7xl lg:text-8xl font-semibold uppercase tracking-wide max-w-[800px]">
            Skills
          </h3>
        </motion.div>
      </motion.div>
      <div className="text-4xl sm400:text-6xl sm600:text-7xl ">
        <FadeIn delay={0} once={false} typeFrom="top" transition={0.4}>
          <IoArrowDownSharp />
        </FadeIn>
      </div>
    </section>
  );
}
