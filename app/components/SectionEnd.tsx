import React, { MutableRefObject, useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

interface SectionEndProps {
  scrollY: number;
  scrollbar: MutableRefObject<Scrollbar | null>;
}

export default function SectionEnd({ scrollY, scrollbar }: SectionEndProps) {
  const sticky = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollbar.current?.addListener(function (status) {
      const offset = status.offset;

      if (sticky.current) {
        if (offset.y < window.innerHeight * 2) {
          sticky.current.style.top = offset.y + "px";
          sticky.current.style.left = offset.x + "px";
        }
      }
    });
  }, [scrollY]);

  return <section ref={sticky}>SectionEnd</section>;
}
