"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollbarOptions } from "smooth-scrollbar/interfaces";
import SectionDescription from "./components/SectionDescription";
import SectionWelcome from "./components/SectionWelcome";
import Loader from "./components/Loader";
import SectionExp from "./components/SectionExp";
import SectionProjects from "./components/SectionProjects";

gsap.registerPlugin(ScrollTrigger);

const options: Partial<ScrollbarOptions> = {
  damping: 0.09,
};

export default function Home() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollbarRef = useRef<Scrollbar | null>(null);

  useEffect(() => {
    const app = document.querySelector("#app");
    if (app) {
      scrollbarRef.current = Scrollbar.init(app as HTMLElement, options);

      const handleScroll = () => {
        if (scrollbarRef.current) {
          const { offset, limit } = scrollbarRef.current;
          const totalScrollableHeight = limit.y;
          const scrolledHeight = offset.y;
          const percentScrolled =
            (scrolledHeight / totalScrollableHeight) * 100;
          setScrollPercent(percentScrolled);
        }
      };

      scrollbarRef.current.addListener(handleScroll);

      handleScroll();

      return () => {
        scrollbarRef.current?.removeListener(handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    console.log(`Scroll Percent: ${scrollPercent}%`);
  }, [scrollPercent]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Loader scrollbarRef={scrollbarRef} />
      <SectionWelcome />
      <SectionDescription />
      {/* <SectionExp /> */}
      <SectionProjects />
      <section></section>
    </main>
  );
}
