"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { Data2d, ScrollbarOptions } from "smooth-scrollbar/interfaces";
import SectionExp from "./components/SectionExp";
import SectionFooter from "./components/SectionFooter";
import SectionProjects from "./components/SectionProjects";
import SectionWelcome from "./components/SectionWelcome";
import Background from "./components/ui/Background";
import Loader from "./components/ui/Loader";

import studio from "@theatre/studio";
// @ts-ignore
import extension from "@theatre/r3f/dist/extension";
import SectionExpDesc from "./components/SectionExpDesc";
import SectionProjectsDesc from "./components/SectionProjectsDesc";
import SectionSkills from "./components/SectionSkills";
import SectionSkillsDesc from "./components/SectionSkillsDesc";
import SectionOut from "./components/SectionOut";

const SectionDescription = dynamic(
  () => import("./components/SectionDescription"),
  {
    ssr: false,
  }
);

const options: Partial<ScrollbarOptions> = {
  damping: 0.05,
};

export default function Home() {
  const [y, setY] = useState(0);
  const [snap, setSnap] = useState(0);
  const scrollbarRef = useRef<Scrollbar | null>(null);

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

      handleScroll();

      return () => {
        scrollbarRef.current?.removeListener(handleScroll);
      };
    }
  }, [scrollbarRef]);

  useEffect(() => {
    let offset: Data2d;
    scrollbarRef.current?.addListener(function (status) {
      offset = status.offset;

      if (Math.abs(offset.y - innerHeight) <= 2) {
        scrollbarRef.current?.setMomentum(0, 0);
      }

      if (Math.abs(offset.y - 2 * innerHeight) <= 1) {
        scrollbarRef.current?.setMomentum(0, 0);
        scrollbarRef.current?.scrollTo(0, 2 * innerHeight + 1);
      }

      if (Math.abs(offset.y - 3 * innerHeight) <= 1) {
        scrollbarRef.current?.setMomentum(0, 0);
        scrollbarRef.current?.scrollTo(0, 3 * innerHeight + 1);
      }

      if (Math.abs(offset.y - 4 * innerHeight) <= 1) {
        scrollbarRef.current?.setMomentum(0, 0);
        scrollbarRef.current?.scrollTo(0, 4 * innerHeight + 1);
      }

      if (Math.abs(offset.y - 5 * innerHeight) <= 1) {
        scrollbarRef.current?.setMomentum(0, 0);
        scrollbarRef.current?.scrollTo(0, 5 * innerHeight + 1);
      }

      if (Math.abs(offset.y - 6 * innerHeight) <= 1) {
        scrollbarRef.current?.setMomentum(0, 0);
        scrollbarRef.current?.scrollTo(0, 6 * innerHeight + 1);
      }

      if (Math.abs(offset.y - 7 * innerHeight) <= 1) {
        scrollbarRef.current?.setMomentum(0, 0);
        scrollbarRef.current?.scrollTo(0, 7 * innerHeight + 1);
      }
    });
  }, [y]);

  
  return (
    <main className=" relative flex min-h-[1000vh] w-full flex-col items-center ">
      <Loader scrollbarRef={scrollbarRef} />
      <SectionWelcome scrollY={y} />
      <SectionDescription scrollY={y} scrollbar={scrollbarRef} />
      <Background distance={y} scrollbar={scrollbarRef} />
      <div className="absolute top-[200vh] left-0 w-full z-30  text-white overflow-x-hidden">
        <SectionExp scrollY={y} />
        <SectionExpDesc />
        <SectionProjects />
        <SectionProjectsDesc scrollY={y} />
        <SectionSkills scrollY={y} />
        <SectionSkillsDesc />
        <SectionOut />
      </div>
      <SectionFooter scrollY={y} />
    </main>
  );
}
