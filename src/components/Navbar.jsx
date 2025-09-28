import logo from "../assets/Logo.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="">
          <img className="mx-2 w-14" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/zion-singleton-9a8886246/">
          <FaLinkedin />{" "}
        </a>
        <a href="https://github.com/SnowiiHDR">
          <FaGithub />{" "}
        </a>
        <a href="mailto:zscsingleton@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
