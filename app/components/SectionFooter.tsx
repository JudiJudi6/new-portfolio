import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionFooter({ scrollY }: { scrollY: number }) {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center px-4 pt-8 pb-2 sm:px-6 sm:pb-4 max-w-[1500px]">
      <div></div>
      <p className="max-w-[350px] text-right sm:text-lg self-end">
        In my free time, I like Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quo iste totam at aut ab cum blanditiis itaque vel
        facilis unde.
      </p>
      <motion.div
        style={{ translateY: (scrollY / 4) * -1 }}
        className="flex flex-col justify-evenly items-center text-sm w-full md800:hidden"
      >
        <div className="self-start w-full py-4 border-b border-black space-y-4 ">
          <p className="max-w-[200px]">
            Feel free to <button className="underline-before">contact</button>{" "}
            me and provide some details about the project
          </p>
          <p className="max-w-[200px]">
            Write some email{" "}
            <button className="underline-before">7lukasz8@gmail.com</button>
          </p>
        </div>
        <div className="w-full flex justify-between py-4">
          <div className="flex gap-1 flex-col">
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
          <p className="max-w-[160px] text-right">
            Always made with passion by Łukasz Michnik{" "}
            <span className="block">
              {new Date().getFullYear()}
              &copy;
            </span>
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ translateY: Math.max(scrollY - window.innerHeight * 8, -200) }}
        className="hidden md800:flex justify-evenly items-center text-sm w-full pb-4"
      >
        <p className="max-w-[200px]">
          Feel free to <button className="underline-before">contact</button> me
          and provide some details about the project
        </p>
        <p className="max-w-[200px]">
          Write some email{" "}
          <button className="underline-before">7lukasz8@gmail.com</button>
        </p>
        <div className="flex gap-1 flex-col">
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
        <p className="max-w-[160px] text-right">
          Always made with passion by Łukasz Michnik{" "}
          <span className="block">
            {new Date().getFullYear()}
            &copy;
          </span>
        </p>
      </motion.div>
    </section>
  );
}
