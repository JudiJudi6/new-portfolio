"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollbarOptions } from "smooth-scrollbar/interfaces";
import SectionDescription from "./components/SectionDescription";
import SectionWelcome from "./components/SectionWelcome";
import Loader from "./components/ui/Loader";
import SectionExp from "./components/SectionExp";
import SectionProjects from "./components/SectionProjects";
import { useMotionValue, useMotionValueEvent } from "framer-motion";
import Background from "./components/ui/Background";

gsap.registerPlugin(ScrollTrigger);

const options: Partial<ScrollbarOptions> = {
  damping: 0.09,
};

export default function Home() {
  const [y, setY] = useState(0);
  const scrollbarRef = useRef<Scrollbar | null>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(200);

  useEffect(
    function () {
      console.log("Latest scrollY:", y);

      if (y > 1470 && y < 2940) {
        setDistance(y);
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    },
    [y]
  );

  useEffect(() => {
    const app = document.querySelector("#app");
    if (app) {
      scrollbarRef.current = Scrollbar.init(app as HTMLElement, options);

      const handleScroll = () => {
        if (scrollbarRef.current) {
          const { offset } = scrollbarRef.current;
          const scrolledHeight = offset.y;
          setY(scrolledHeight);
        }
      };

      scrollbarRef.current.addListener(handleScroll);

      // Call handleScroll immediately to set initial scroll value
      handleScroll();

      return () => {
        scrollbarRef.current?.removeListener(handleScroll);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // useEffect(() => {
  //   console.log(`Scroll Percent: ${scrollPercent}%`);
  // }, [scrollPercent]);

  return (
    <main className=" relative flex min-h-screen w-full flex-col items-center">
      <Loader scrollbarRef={scrollbarRef} />
      <SectionWelcome scrollY={y} />
      <SectionDescription scrollY={y} />
      <div className="relative h-[200vh] w-full [perspective:1000px] [transform-style:preserve-3d] antialiased ">
        <Background distance={distance} isFixed={isFixed} />
      </div>
      {/* <SectionExp /> */}
      <SectionProjects />
      <section className="h-screen w-full"></section>
    </main>
  );
}
