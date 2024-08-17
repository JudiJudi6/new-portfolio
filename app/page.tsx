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
import SectionEnd from "./components/SectionEnd";
import Background from "./components/ui/Background";
import Loader from "./components/ui/Loader";

import studio from "@theatre/studio";
// @ts-ignore
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
  }, []);
  
  // useEffect(() => {
  //   let orientationSnap = 0;

  //   const handleWheel = (event: WheelEvent) => {
  //     if (y > window.innerHeight) {
  //       if (event.deltaY > 0) {
  //         orientationSnap = 1;
  //       } else if (event.deltaY < 0) {
  //         orientationSnap = -1;
  //       }

  //       // Aktualizuj stan snap tylko, gdy orientationSnap nie jest zerem
  //       setSnap((prevSnap) => {
  //         const newSnap = prevSnap + orientationSnap;

  //         // Obsługuj snapowanie tylko w określonych przedziałach
  //         if (newSnap === -1) {
  //           scrollbarRef.current?.scrollTo(0, window.innerHeight, 600);
  //         } else if (newSnap === 0) {
  //           scrollbarRef.current?.scrollTo(0, 2 * window.innerHeight, 600);
  //         } else if (newSnap === 1) {
  //           scrollbarRef.current?.scrollTo(0, 3 * window.innerHeight, 1000);
  //         }

  //         // Zwróć nową wartość snap, ale ogranicz ją do przedziału -1, 0, 1
  //         return Math.max(-1, Math.min(newSnap, 1));
  //       });
  //     }
  //   };

  //   console.log(snap);
  //   window.addEventListener("wheel", handleWheel);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [y]);

  // useEffect(() => {
  //   let startY = 0;
  //   let endY = 0;

  //   const handleTouchStart = (event: TouchEvent) => {
  //     if (event.touches.length === 1) {
  //       startY = event.touches[0].clientY;
  //     }
  //   };

  //   const handleTouchMove = (event: TouchEvent) => {
  //     if (event.touches.length === 1) {
  //       endY = event.touches[0].clientY;
  //       const deltaY = endY - startY;

  //       // Przewijanie w dół
  //       if (deltaY > 30) {
  //         // Możesz dostosować wartość 30 do własnych potrzeb
  //         setSnap((prevSnap) => {
  //           const newSnap = Math.max(prevSnap - 1, -1);
  //           if (newSnap === -1) {
  //             scrollbarRef.current?.scrollTo(0, window.innerHeight, 600);
  //           } else if (newSnap === 0) {
  //             scrollbarRef.current?.scrollTo(0, 2 * window.innerHeight, 600);
  //           } else if (newSnap === 1) {
  //             scrollbarRef.current?.scrollTo(
  //               0,
  //               3 * window.innerHeight + window.innerHeight / 2,
  //               1000
  //             );
  //           }
  //           return newSnap;
  //         });
  //         startY = endY; // Resetuj startY
  //       }
  //       // Przewijanie w górę
  //       else if (deltaY < -30) {
  //         // Możesz dostosować wartość -30 do własnych potrzeb
  //         setSnap((prevSnap) => {
  //           const newSnap = Math.min(prevSnap + 1, 1);
  //           if (newSnap === -1) {
  //             scrollbarRef.current?.scrollTo(0, window.innerHeight, 600);
  //           } else if (newSnap === 0) {
  //             scrollbarRef.current?.scrollTo(0, 2 * window.innerHeight, 600);
  //           } else if (newSnap === 1) {
  //             scrollbarRef.current?.scrollTo(
  //               0,
  //               3 * window.innerHeight + window.innerHeight / 2,
  //               1000
  //             );
  //           }
  //           return newSnap;
  //         });
  //         startY = endY; // Resetuj startY
  //       }
  //     }
  //   };

  //   window.addEventListener("touchstart", handleTouchStart);
  //   window.addEventListener("touchmove", handleTouchMove);

  //   return () => {
  //     window.removeEventListener("touchstart", handleTouchStart);
  //     window.removeEventListener("touchmove", handleTouchMove);
  //   };
  // }, [y, snap]);

  useEffect(() => {
    let offset: Data2d;
    scrollbarRef.current?.addListener(function (status) {
      offset = status.offset;

      if (Math.abs(offset.y - innerHeight) <= 2) {
        scrollbarRef.current?.setMomentum(0, 0);
      }
    });
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
