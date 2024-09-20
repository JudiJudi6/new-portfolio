import { cubicBezier, motion } from "framer-motion";
import React from "react";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa6";
import { BsFillRecordCircleFill } from "react-icons/bs";
import AnimateText from "./ui/AnimateText";
import { IoArrowDownSharp } from "react-icons/io5";
import FadeIn from "./ui/FadeIn";

export default function SectionProjects() {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center px-4 pt-8 pb-2 sm:px-6 sm:pb-4 max-w-[1500px] mx-auto">
      <div></div>
      <div className="flex justify-center items-center flex-col gap-10">
        <div className="flex justify-center items-center">
          <div className="h-full py-1 lg:pt-2 lg:pb-0 sm:flex hidden flex-col justify-between items-end mr-2">
            <div className="uppercase flex flex-col justify-center items-end text-xs">
              <motion.p
                initial={{ translateX: "-150%", opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ amount: 0.99 }}
                transition={{
                  duration: 0.5,
                  ease: cubicBezier(0.5, 1.1, 1, 1),
                  delay: 0.4,
                }}
              >
                Some
              </motion.p>
              <motion.p
                initial={{ translateX: "-100%", opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ amount: 0.99 }}
                transition={{
                  duration: 0.5,
                  ease: cubicBezier(0.5, 1.1, 1, 1),
                  delay: 0.45,
                }}
              >
                Selected
              </motion.p>
            </div>
            <motion.div
              className="w-2 h-2 bg-white mb-[8px] lg:mb-[17px]"
              initial={{ translateX: "-200%", opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ amount: 0.99 }}
              transition={{
                duration: 0.5,
                ease: cubicBezier(0.5, 1.1, 1, 1),
                delay: 0.5,
              }}
            ></motion.div>
          </div>
          <h3 className="text-3xl sm400:text-4xl sm500:text-5xl sm600:text-6xl sm:text-7xl lg:text-8xl font-semibold uppercase tracking-wide text-center">
            <span className="relative flex justify-center items-end ">
              <motion.span
                initial={{ translateY: "100%" }}
                whileInView={{ translateY: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: cubicBezier(0.5, 1.1, 1, 1),
                  delay: 0.1,
                }}
                className="block"
              >
                Projects
              </motion.span>
              <span
                className={`absolute block origin-right top-full left-0 bg-black w-full h-full z-10`}
              ></span>
            </span>
          </h3>
          <div className="h-full py-1 lg:pt-2 lg:pb-0 sm:flex hidden flex-col justify-between items-start ml-2">
            <div className="uppercase flex flex-col justify-center items-start text-xs">
              <motion.p
                initial={{ translateX: "100%", opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ amount: 0.99 }}
                transition={{
                  duration: 0.5,
                  ease: cubicBezier(0.5, 1.1, 1, 1),
                  delay: 0.4,
                }}
              >
                web apps
              </motion.p>
              <motion.p
                initial={{ translateX: "150%", opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ amount: 0.99 }}
                transition={{
                  duration: 0.5,
                  ease: cubicBezier(0.5, 1.1, 1, 1),
                  delay: 0.45,
                }}
              >
                UX && UI
              </motion.p>
            </div>
            <motion.div
              className="mb-[8px] lg:mb-[17px] flex text-[10px]"
              initial={{ translateX: "200%", opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ amount: 0.99 }}
              transition={{
                duration: 0.5,
                ease: cubicBezier(0.5, 1.1, 1, 1),
                delay: 0.5,
              }}
            >
              <ImCross />
              <BsFillRecordCircleFill />
            </motion.div>
          </div>
        </div>
        <div className="z-20 w-4/6 uppercase text-center text-xs sm:text-sm tracking-wide">
          <AnimateText
            className=""
            delay={0.7}
            transition={0.9}
            bgColor="black"
            once={false}
          >
            <p>
              Group and university projects, Personal projects, web apps,
              practice and playground
            </p>
          </AnimateText>
        </div>
      </div>
      <div className="text-4xl sm400:text-6xl sm600:text-7xl ">
        <FadeIn delay={0} once={false} typeFrom="top" transition={0.4}>
          <IoArrowDownSharp />
        </FadeIn>
      </div>
    </section>
  );
}
