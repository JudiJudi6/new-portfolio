"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProjectItem from "./projects/ProjectItem";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import { title } from "process";

interface SectionProjectsDescProps {
  scrollY: number;
}

const projects = [
  {
    title: "ReadIt",
    description:
      'Winner of "VIA Express do sukcesu" contest for the best start up idea. The site is for sharing knowledge with others around the world.',
    link: "/readit",
    titlePhoto: "/readit/ph1.jpg",
  },
  {
    title: "FireDesk",
    description:
      "Huge project created in cooperation with Xebia Company and Rzeszów University of Technology. The application is a hotdesk reservation system made in 3D technology.",
    link: "/firedesk",
    titlePhoto: "/firedesk/ph1.jpg",
  },
  {
    title: "Bitchain",
    description:
      "Copy of a cryptocurrency exchange containing all the mechanics of a real exchange.",
    link: "/bitchain",
    titlePhoto: "/bitchain/bitchain.jpg",
  },
  {
    title: "Kulinarna Baza",
    description:
      "A website for sharing recipes or articles with others. The site contains a user system, comments, likes, and various search engines.",
    link: "/kulinarna-baza",
    titlePhoto: "/baza/ph2.jpg",
  },
  {
    title: "Wallet Wise",
    description:
      "Online wallet simulator that allows to exchange and transfer funds between users. The application also has a system of exchange rates, history of transactions and friends list.",
    link: "/wallet-wise",
    titlePhoto: "/wallet/wallet.jpg",
  },
  {
    title: "Robots Animation",
    link: "/robots-animation",
    titlePhoto: "/three/three.jpg",
  },
  {
    title: "CNN Model",
    link: "/cnn-model",
    titlePhoto: "/cnn/ph2.jpg",
  },
  {
    title: "Useless Tools",
    link: "/useless-tools",
    titlePhoto: "/useless/useless.jpg",
  },
];

export default function SectionProjectsDesc({
  scrollY,
}: SectionProjectsDescProps) {
  const [selected, setSelected] = useState("");
  const [project, setProject] = useState<
    | {
        title: string;
        description: string;
        link: string;
        titlePhoto: string;
      }
    | {
        title: string;
        link: string;
        titlePhoto: string;
        description?: undefined;
      }
  >();

  useEffect(() => {
    projects.forEach((project) => {
      if (project.title === selected) {
        setProject(project);
      } else if (selected === "") {
        setProject(undefined);
      }
    });
  }, [selected]);

  return (
    <section className="h-[200vh] md:h-screen w-full grid md:grid-cols-[2fr_2fr] lg:grid-cols-[2fr_3fr] px-4 pt-8 pb-2 sm400:px-6 sm:pb-4 max-w-[1500px]">
      <div className="hidden md:flex justify-center items-center pr-8 ">
        <AnimatePresence mode="wait">
          {project && (
            <motion.div
              className="flex flex-col"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project?.titlePhoto}
                  alt={project?.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-white">{project?.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="py-20 flex flex-col justify-start items-start gap-10 sm:gap-14 max-w-[400px] mx-auto md:hidden">
        {projects.map((project, index) => {
          if (project.description !== undefined) {
            return (
              <ProjectItem
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            );
          }
        })}
        <motion.p
          initial={{ translateY: "-100%", opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{
            duration: 0.5,
            ease: cubicBezier(0.5, 1.1, 1, 1),
            delay: 0.3,
          }}
          className="text-3xl font-semibold self-center py-3"
        >
          See also
        </motion.p>
        {projects.map((project, index) => {
          if (project.description === undefined) {
            return (
              <ProjectItem
                key={index}
                title={project.title}
                link={project.link}
              />
            );
          }
        })}
      </div>
      <div className="hidden md:flex justify-center items-center flex-col ">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            link={project.link}
            md
            setSeleced={setSelected}
          />
        ))}
      </div>
    </section>
  );
}
