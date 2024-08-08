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
import Background from "./components/ui/Background";
import Loader from "./components/ui/Loader";

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
  }, [y]);

  return (
    <main className=" relative flex min-h-screen w-full flex-col items-center ">
      <Loader scrollbarRef={scrollbarRef} />
      <SectionWelcome scrollY={y} />
      <SectionDescription scrollY={y} scrollbar={scrollbarRef} />
      <Background distance={y} scrollbar={scrollbarRef} />
      <div className="z-10 translate-y-[-100vh] text-white">
        <SectionExp />
        <SectionProjects />
        <SectionProjects />
        <SectionProjects />
        <SectionProjects />
      </div>
      <SectionFooter />
    </main>
  );
}
