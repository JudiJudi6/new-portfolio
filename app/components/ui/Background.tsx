import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface BackgroundProps {
  distance: number;
  isFixed: boolean;
}

export default function Background({ distance, isFixed }: BackgroundProps) {
  const [top, setTop] = useState(0);
  const sticky = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      if (sticky.current) {
        console.log(
          Math.abs(sticky.current.getBoundingClientRect().top).toFixed()
        );
        setTop(+Math.abs(sticky.current.getBoundingClientRect().top).toFixed());
      }
    },
    [distance]
  );

  return (
    <>
      <div ref={sticky} />
      <div
        style={{
          top: isFixed ? `${top}px` : "",
        }}
        className="absolute w-full h-screen bg-green-400"
      >
        <h2>This is a fixed div</h2>
      </div>
    </>
  );
}
