"use client";

import React, { MutableRefObject, useEffect, useRef } from "react";
import { IoArrowDownSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import AnimateText from "./ui/AnimateText";
import SlideBars from "./ui/SlideBars";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

interface SectionDescriptionProps {
  scrollY: number;
  scrollbar: MutableRefObject<Scrollbar | null>;
}

export default function SectionDescription({
  scrollY,
  scrollbar,
}: SectionDescriptionProps) {
  const sticky = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollbar.current?.addListener(function (status) {
      const offset = status.offset;

      if (sticky.current) {
        if (offset.y < window.innerHeight * 2) {
          sticky.current.style.top = offset.y + "px";
          sticky.current.style.left = offset.x + "px";
        }
      }
    });
  }, [scrollY]);

  return (
    <section
      ref={sticky}
      className="sticky top-0 left-0 h-screen w-full flex flex-col justify-between items-center  px-4 py-2 pb-2 sm:px-6 sm:pb-4 max-w-[1500px] "
    >
      <div className="flex flex-col justify-end items-end gap-2 mb-1 self-end">
        <SlideBars
          delay={0}
          typeFrom="right"
          className="flex justify-center items-center gap-3"
        >
          <div className="w-32 h-3 bg-black " />
          <div className="w-10 h-3 bg-black " />
        </SlideBars>
        <SlideBars
          delay={0}
          typeFrom="right"
          className="flex justify-center items-center gap-3"
        >
          <div className="w-12 h-3 bg-black " />
          <div className="w-3 h-3 bg-black " />
          <div className="w-12 h-3 bg-black" />
        </SlideBars>
        <SlideBars
          delay={0}
          typeFrom="right"
          className="flex justify-center items-center gap-3"
        >
          <></> <div className="w-20 h-3 bg-black " />
        </SlideBars>{" "}
      </div>
      <div className="flex flex-col gap-20 px-4 sm500:px-20 sm400:text-lg sm600:text-xl sm:text-2xl md900:text-3xl">
        <AnimateText
          className=""
          delay={0}
          transition={0.7}
          style={{ translateY: (scrollY / 7) * -1 + 100 }}
        >
          <p>
            I am Łukasz Michnik,{" "}
            <span className="font-semibold">a 20 years old guy</span> who
            decided to become a{" "}
            <span className="underlined">full stack developer</span> with
            node.js. I am currently learning web technologies{" "}
            <span className="font-semibold">for almost 2 years.</span>
          </p>
        </AnimateText>
        <AnimateText
          className=""
          delay={0}
          transition={0.7}
          style={{ translateY: (scrollY / 7) * -1 + 100 }}
        >
          <p>
            I am also a <span className="underlined">student</span> at Rzeszów
            University of Technology in my{" "}
            <span className="font-semibold">third year.</span> In my free time,
            I like to build new projects and develop existing ones, not
            necessarily finish... but someday I will{" "}
            <span className="font-semibold">definitely finish</span> all of them
            ;)
          </p>
        </AnimateText>
      </div>
      <div className="pl-14 pb-10 px-4 sm500:px-20 self-start text-4xl sm400:text-6xl sm600:text-7xl ">
        <FadeIn delay={0.6} once={false} typeFrom="top" transition={0.4}>
          <IoArrowDownSharp />
        </FadeIn>
      </div>
    </section>
  );
}
