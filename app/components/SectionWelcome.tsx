import Link from "next/link";
import React from "react";

export default function SectionWelcome() {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center px-4 pt-8 pb-2 sm:px-6 sm:pb-4 max-w-[1500px]">
      <div className="flex justify-between items-center w-full">
        <div className="w-3 h-3 bg-black block"></div>
        <button className="text-sm uppercase font-light underline-before">
          Contact
        </button>
      </div>
      <div className="flex flex-col md900:flex-row justify-between items-center w-full gap-20">
        <div className="self-start md900:self-center md900:pb-16 flex gap-10 font-light text-smm">
          <p>2003</p>
          <p>20.11</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl sm400:text-4xl sm500:text-5xl sm600:text-6xl sm:text-7xl lg:text-8xl font-semibold uppercase tracking-wide max-w-[800px] ">
            Frontend Developer
          </h1>
          <h2 className="tracking-wide sm500:text-lg sm:uppercase">
            Łukasz Michnik
          </h2>
        </div>
        <div className="self-end  md900:self-center md900:pb-16 flex gap-10 font-light text-smm">
          <p>Poland</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
      <div className="text-[13px] lg:text-sm w-full flex justify-between items-end gap-5">
        <div className="flex gap-5">
          <Link
            href="https://github.com/JudiJudi6"
            target="_blank"
            className="underline-before"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/%C5%82ukasz-michnik-98b8122ab/"
            target="_blank"
            className="underline-before"
          >
            Linkedin
          </Link>
        </div>
        <div className="flex flex-col justify-end items-end gap-2 mb-1">
          <div className="flex justify-center items-center gap-3">
            <div className="w-3 h-3 bg-black rounded-full" />
            <div className="w-10 h-3 bg-black hidden md900:block" />
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-3 bg-black hidden md900:block" />
            <div className="w-3 h-3 bg-black hidden md900:block" />
            <div className="w-12 h-3 bg-black" />
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="w-3 md900:w-16 h-3 bg-black" />
            <div className="w-3 md900:w-10 h-3 bg-black" />
            <div className="w-20 h-3 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
