import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div className="text-center tracking-tighter">
        <a
          href="https://docs.google.com/document/d/1xIOQioq7mC7_mXfTgVRqX1pHp7td-SavILq-6EGaGr4/edit?usp=sharings.google.com/document/d/1lY79fq5f3ojn4Cg52fCvd83u7bz5oNEnfFzrEsUJLS0/edit?usp=sharing"
          className="border-b"
        >
          {CONTACT.resume}
        </a>
      </div>
      <div className="text-center tracking-tighter">
        <a href="mailto:zscsingleton@gmail.com" className="border-b">
          {" "}
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
