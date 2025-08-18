import aboutImg from "../assets/24639E1D-B496-47BC-A82B-6343B93FEBF7.png";
import { ABOUT_TEXT } from "../constants";
import { GiCardAceSpades,GiCard2Spades,GiCard3Spades,GiCard4Spades,GiCard5Spades,GiCard6Spades,GiCard7Spades,GiCard8Spades,GiCard9Spades,GiCard10Spades,GiCardJackSpades,GiCardQueenSpades,GiCardKingSpades,GiCardJoker } from 'react-icons/gi';

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        <span className="text-white-300"> About </span>
        <span className="text-white-300"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2  lg:text-2xl"
        >
          <div className="flex justify-center">
            <p className="my-2 max-w-xl py-6 text-center whitespace-pre-line">{ABOUT_TEXT}</p>
          </div>
          <div className= "flex">
          <GiCardAceSpades className="text-5xl" />
          <GiCard2Spades className="text-5xl" />
          <GiCard3Spades className="text-5xl" />
          <GiCard4Spades className="text-5xl" />
          <GiCard5Spades className="text-5xl" />
          <GiCard6Spades className="text-5xl" />
          <GiCard7Spades className="text-5xl" />
          <GiCard8Spades className="text-5xl" />
          <GiCard9Spades className="text-5xl" />
          <GiCard10Spades className="text-5xl" />
          <GiCardJackSpades className="text-5xl" />
          <GiCardQueenSpades className="text-5xl" />
          <GiCardKingSpades className="text-5xl" />
          <GiCardJoker className="text-5xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
