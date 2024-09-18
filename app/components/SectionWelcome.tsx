"use client";

import Link from "next/link";
import React from "react";
import SlideUpText from "./ui/SlideUpText";
import SlideBars from "./ui/SlideBars";
import FadeIn from "./ui/FadeIn";
import { motion } from "framer-motion";

export default function SectionWelcome({ scrollY }: { scrollY: number }) {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center px-4 pt-8 sm:px-6 max-w-[1500px]">
      <div className="flex justify-between items-center w-full">
        <SlideBars typeFrom="left" delay={2.1}>
          <div className="w-3 h-3 bg-black block"></div>
          <></>
        </SlideBars>
        <FadeIn delay={2}>
          <button className="fixed top-0 right-0 text-sm uppercase font-light underline-before">
            Contact
          </button>
        </FadeIn>
      </div>
      <motion.div
        className="flex flex-col md900:flex-row justify-between items-center w-full gap-20"
        style={{ translateY: (scrollY / 5) * -1 }}
      >
        <div className="self-start md900:self-center md900:pb-16 flex gap-10 font-light text-smm">
          <SlideUpText as="p" text="2003" typeFrom="top" delay={2.1} />
          <SlideUpText as="p" text="20.11" typeFrom="bottom" delay={2.1} />
        </div>
        <div className="text-center">
          <SlideUpText
            text="Frontend Developer"
            as="h1"
            delay={2.1}
            transition={0.5}
            className="text-3xl sm400:text-4xl sm500:text-5xl sm600:text-6xl sm:text-7xl lg:text-8xl font-semibold uppercase tracking-wide max-w-[800px] "
          />{" "}
          <FadeIn
            delay={2.1}
            typeFrom="bottom"
            className="relative tracking-wide sm500:text-lg sm:uppercase z-10"
          >
            Łukasz Michnik
          </FadeIn>
        </div>
        <div className="self-end  md900:self-center md900:pb-16 flex gap-10 font-light text-smm">
          <SlideUpText as="p" text="Poland" delay={2.1} />
          <SlideUpText
            as="p"
            text={String(new Date().getFullYear())}
            typeFrom="top"
            delay={2.1}
          />
        </div>
      </motion.div>
      <div className="text-[13px] lg:text-sm w-full flex justify-between items-end gap-5">
        <div className="flex gap-5 pb-2">
          <FadeIn delay={2} typeFrom="bottom">
            <Link
              href="https://github.com/JudiJudi6"
              target="_blank"
              className="underline-before"
            >
              Github
            </Link>
          </FadeIn>
          <FadeIn delay={2.1} typeFrom="bottom">
            <Link
              href="https://www.linkedin.com/in/%C5%82ukasz-michnik-98b8122ab/"
              target="_blank"
              className="underline-before"
            >
              Linkedin
            </Link>
          </FadeIn>
        </div>
        <div className="flex flex-col justify-end items-end gap-2 mb-1">
          <SlideBars
            delay={2.1}
            typeFrom="right"
            className="flex justify-center items-center gap-3"
          >
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="w-10 h-3 bg-black hidden md900:block" />
          </SlideBars>
          <SlideBars
            delay={2.1}
            typeFrom="right"
            className="flex justify-center items-center gap-3"
          >
            <div className="w-12 h-3 bg-black hidden md900:block" />
            <div className="w-3 h-3 bg-black hidden md900:block" />
            <div className="w-12 h-3 bg-black" />
          </SlideBars>
          <SlideBars
            delay={2.1}
            typeFrom="right"
            className="flex justify-center items-center gap-3"
          >
            <div className="w-3 md900:w-16 h-3 bg-black" />
            <div className="w-3 md900:w-10 h-3 bg-black" />
            <div className="w-20 h-3 bg-black" />
          </SlideBars>
        </div>
      </div>
    </section>
  );
}
