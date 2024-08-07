"use client";

import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { MutableRefObject, useEffect, useState } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

interface LoaderProps {
  scrollbarRef: MutableRefObject<Scrollbar | null>;
}

export default function Loader({ scrollbarRef }: LoaderProps) {
  const [timer, setTimer] = useState<boolean>(true);

  useEffect(function () {
    setTimeout(() => {
      setTimer(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const app = document.querySelector(".scroll-content") as HTMLElement;

    if (app) {
      if (timer) {
        app.classList.add("hidden-app");
      } else {
        app.classList.remove("hidden-app");
        scrollbarRef.current?.setPosition(0, 0);
      }
    }
  }, [timer]);
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-full bg-white z-[60] overflow-hidden"
      animate={{
        opacity: 0,
        transitionEnd: {
          display: "none",
        },
      }}
      initial={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <motion.div
        className="h-full w-full bg-white flex justify-center items-center"
        animate={{ translateX: "100%" }}
        initial={{ translateX: 0 }}
        transition={{ duration: 0.4, delay: 1.8 }}
      >
        <Spinner />
      </motion.div>
    </motion.div>
  );
}
