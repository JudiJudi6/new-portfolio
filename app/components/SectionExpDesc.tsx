import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ExpItem from "./exp/ExpItem";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function SectionExpDesc() {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center px-4 pt-8 pb-2 sm400:px-10 sm600:px-20 sm:px-32 sm:pb-4 max-w-[1500px]">
      <div></div>
      <div className="sm400:w-full flex justify-center items-end flex-col">
        <ExpItem
          logoName="cetuspro.png"
          logoAlt="Cetus Pro logo"
          workPositon="Frontend Web Developer"
          workLink="https://cetuspro.com/"
          workLinkLabel="cetuspro.com"
          timeDates="10.2023 - 08.2024"
          timeMethod="part time"
          time="11 months"
        />
        <motion.div className="mt-12 sm500:mt-16 flex justify-center items-end flex-col sm:text-lg">
          <motion.p
            viewport={{ amount: 0.9 }}
            initial={{ translateX: "-30%", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Want to be next here?{" "}
          </motion.p>
          <MotionLink
            viewport={{ amount: 0.9 }}
            initial={{ translateX: "50%", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            href=""
            className="underline-before before:bg-white py-1 uppercase font-light text-sm sm:text-base mt-6"
          >
            Contact
          </MotionLink>
        </motion.div>
      </div>
      <div></div>
    </section>
  );
}
