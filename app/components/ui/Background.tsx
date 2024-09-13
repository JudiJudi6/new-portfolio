import { MutableRefObject, useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

interface BackgroundProps {
  distance: number;
  scrollbar: MutableRefObject<Scrollbar | null>;
}

export default function Background({ distance, scrollbar }: BackgroundProps) {
  const sticky = useRef<HTMLDivElement>(null);

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
      className="sticky top-0 left-0 w-full h-screen bg-black"
    ></div>
  );
}
