"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollbarOptions } from "smooth-scrollbar/interfaces";
import SectionExp from "./components/SectionExp";
import SectionFooter from "./components/SectionFooter";
import SectionProjects from "./components/SectionProjects";
import SectionWelcome from "./components/SectionWelcome";
import SectionEnd from "./components/SectionEnd";
import Background from "./components/ui/Background";
import Loader from "./components/ui/Loader";

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

studio.initialize();
studio.extend(extension);

const SectionDescription = dynamic(
  () => import("./components/SectionDescription"),
  {
    ssr: false,
  }
);
gsap.registerPlugin(ScrollTrigger);

const options: Partial<ScrollbarOptions> = {
  damping: 0.09,
};

export default function Home() {
  const [y, setY] = useState(0);
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
  }, []);

  useEffect(() => {
    scrollbarRef.current?.addListener(function (status) {
      const offset = status.offset;

      if (Math.abs(offset.y - innerHeight) <= 2) {
        scrollbarRef.current?.setMomentum(0, 0);
      }
    });
    console.log(y);
  }, [y]);

  return (
    <main className=" relative flex min-h-[800vh] w-full flex-col items-center ">
      <Loader scrollbarRef={scrollbarRef} />
      <SectionWelcome scrollY={y} />
      <SectionDescription scrollY={y} scrollbar={scrollbarRef} />
      <Background distance={y} scrollbar={scrollbarRef} />
      <div className="absolute top-[200vh] left-0 w-full z-30  text-white">
        <SectionExp />
        <SectionProjects />
        <SectionProjects />
        <SectionProjects />
        <SectionProjects />
        {/* <SectionEnd scrollY={y} scrollbar={scrollbarRef}/> */}
      </div>
      <SectionFooter scrollY={y} />
    </main>
  );
}
