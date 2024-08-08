import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <div className="flex flex-col">
      <motion.div
        className="w-[150px] h-6 bg-black origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 0.4,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="w-[150px] h-6 bg-black origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 0.4,
          repeatType: "reverse",
          delay: 0.3,
        }}
      ></motion.div>
      <motion.div
        className="w-[150px] h-6 bg-black origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 0.4,
          repeatType: "reverse",
          delay: 0.6,
        }}
      ></motion.div>
    </div>
  );
}
