"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
// import SlideBars from "./SlideBars";
import SlideBarsBgc from "./SlideBarsBgc";
import { AnimatePresence } from "framer-motion";

interface BackgroundProps {
  distance: number;
  scrollbar: MutableRefObject<Scrollbar | null>;
}

export default function Background({ distance, scrollbar }: BackgroundProps) {
  const sticky = useRef<HTMLDivElement>(null);
  const [startAnimationFirstBars, setStartAnimationFirstBars] = useState(false);
  const [startAnimationSecondBars, setStartAnimationSecondBars] =
    useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowHeight = window.innerHeight;
      const windowPartCalc = windowHeight / 5;

      const firstBars =
        distance > windowHeight * 1 + 2 * windowPartCalc &&
        distance < windowHeight * 3 - 2 * windowPartCalc;
      const secondBars =
        distance > windowHeight * 3 - 2 * windowPartCalc &&
        distance < windowHeight * 3 +  windowPartCalc;

      setStartAnimationFirstBars(firstBars);
      setStartAnimationSecondBars(secondBars);
    }
  }, [distance]);

  useEffect(() => {
    scrollbar.current?.addListener((status) => {
      const offset = status.offset;

      if (sticky.current) {
        if (offset.y < window.innerHeight * 9) {
          sticky.current.style.top = offset.y + "px";
          sticky.current.style.left = offset.x + "px";
        }
      }
    });
  }, [distance, scrollbar]);

  return (
    <div
      ref={sticky}
      className="sticky top-0 left-0 w-full h-[calc(100vh+4px)] bg-black"
    >
      <div className="max-w-[1500px] w-full h-full flex-col justify-between items-center px-4 py-4 sm:px-6 sm:py-6 mx-auto flex">
        <AnimatePresence mode="wait">
          {startAnimationFirstBars && (
            <div className="flex-col justify-end items-end gap-2 mb-1 w-full hidden lg:flex">
              <SlideBarsBgc
                delay={0}
                typeFrom="right"
                className="flex justify-center items-center gap-3"
                add="1"
              >
                <div className="w-3 md900:w-5 h-3 bg-white" />
                <div className="w-3 md900:w-10 h-3 bg-white" />
                <div className="w-16 h-3 bg-white" />
              </SlideBarsBgc>
              <SlideBarsBgc
                delay={0}
                typeFrom="right"
                className="flex justify-center items-center gap-3"
                add="2"
              >
                <div className="w-6 h-3 bg-white hidden md900:block" />
                <div className="w-3 h-3 bg-white hidden md900:block rounded-full" />
                <div className="w-12 h-3 bg-white" />
              </SlideBarsBgc>
              <SlideBarsBgc
                delay={0}
                typeFrom="right"
                className="flex justify-center items-center gap-3"
                add="3"
              >
                <></>
                <div className="w-20 h-3 bg-white hidden md900:block" />
              </SlideBarsBgc>
            </div>
          )}
        </AnimatePresence>
        <div></div>
        <AnimatePresence mode="wait">
          {startAnimationSecondBars && (
            <div className="flex-col justify-end items-start gap-2 mb-1 w-full hidden sm:flex">
              <SlideBarsBgc
                delay={0.1}
                typeFrom="left"
                className="flex justify-center items-center gap-3"
                add="4"
              >
                <div className="w-16 h-3 bg-white" />
                <></>
              </SlideBarsBgc>
              <SlideBarsBgc
                delay={0.1}
                typeFrom="left"
                className="flex justify-center items-center gap-3"
                add="5"
              >
                <div className="w-6 h-3 bg-white" />
                <div className="w-12 h-3 bg-white" />
              </SlideBarsBgc>
              <SlideBarsBgc
                delay={0.1}
                typeFrom="left"
                className="flex justify-center items-center gap-3"
                add="6"
              >
                <div className="w-3 md900:w-10 h-3 bg-white" />
                <div className="w-3 md900:w-5 h-3 bg-white" />
                <div className="w-16 h-3 bg-white" />
              </SlideBarsBgc>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
