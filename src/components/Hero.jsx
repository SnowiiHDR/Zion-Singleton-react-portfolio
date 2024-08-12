import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/outside.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -1000, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-regular
             tracking-tight lg:mt-16 lg:text-8xl"
            >
              Zion Singleton
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-500 via-teal-200
             to-green-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Computer Science | Game Design
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="rounded-2xl"
              src={profilePic}
              alt="Zion Singleton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;