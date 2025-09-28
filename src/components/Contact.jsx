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
