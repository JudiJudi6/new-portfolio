import Link from "next/link";
import React from "react";
import { cubicBezier, motion } from "framer-motion";

interface ProjectItemProps {
  title: string;
  description?: string;
  link: string;
  md?: boolean;
  setSeleced?: React.Dispatch<React.SetStateAction<string>>;
}

const MotionLink = motion(Link);

export default function ProjectItem({
  description,
  link,
  title,
  md,
  setSeleced,
}: ProjectItemProps) {
  if (md) {
    return (
      <MotionLink
        href=""
        initial={{ translateX: "20%", opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ amount: 0.8 }}
        transition={{
          duration: 0.5,
          ease: cubicBezier(0.5, 1.1, 1, 1),
          delay: 0.3,
        }}
        className="flex flex-col w-full"
        onHoverStart={() => {
          setSeleced && setSeleced(title);
        }}
        onHoverEnd={() => {
          setSeleced && setSeleced("");
        }}
      >
        <p className="text-3xl tracking-wider opacity-40 hover:opacity-100 transition-all duration-200 py-3 hover:translate-x-4">
          {title}
        </p>
      </MotionLink>
    );
  }

  return (
    <motion.div
      initial={{ translateX: description ? "20%" : "-20%", opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ amount: 0.8 }}
      transition={{
        duration: 0.5,
        ease: cubicBezier(0.5, 1.1, 1, 1),
        delay: 0.3,
      }}
      className="flex flex-col w-full"
    >
      {description && description.length > 0 ? (
        <>
          <p className="text-3xl font-semibold tracking-wide">{title}</p>
          <p className="text-xs font-light mt-2">{description}</p>
          <Link
            href={link}
            className="px-5 py-2 uppercase text-black bg-white text-xs font-semibold mt-2 self-end hover:bg-whiteDarkest transition-colors duration-300"
          >
            Show
          </Link>
        </>
      ) : (
        <Link href={link} className="text-2xl font-semibold tracking-wide py-1">
          {title}
        </Link>
      )}
    </motion.div>
  );
}
