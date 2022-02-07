import { motion } from "framer-motion";
import Typed from "react-typed";

const Header = () => {
  return (
    <>
      <div className="header-bg min-h-[20rem] pb-12 md:pb-0 md:min-h-[35rem] flex flex-col justify-center items-center">
        <motion.header animate={{ top: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }} initial={{ top: -50, position: "relative", opacity: 0 }} className="px-3 py-6 mt-24 font-sans text-6xl text-center md:mt-0 leading-sung md:text-8xl text-light">
          React Movies App
        </motion.header>
        <div className="text-xl md:text-2xl" style={{ color: "#fff", opacity: "0.6" }}>
          <Typed strings={["Search Movies By Genre", "Watch Trending Movies", "Search your favorite movies"]} typeSpeed={80} backSpeed={50} loop />
        </div>
      </div>
    </>
  );
};

export default Header;
