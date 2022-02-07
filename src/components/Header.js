// import { useEffect, useState } from "react";
import SearchFn from "./SearchFn";
// import GenreList from "./GenreList";
import { motion } from "framer-motion";

const Header = () => {
  // const [genre, setGenre] = useState();
  // useEffect(() => {
  // }, [genre]);
  return (
    <>
      <div className="header-bg min-h-[20rem] pb-12 md:pb-0 md:min-h-[35rem] flex flex-col justify-center items-center">
        <motion.header animate={{ top: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }} initial={{ top: -50, position: "relative", opacity: 0 }} className="px-3 py-6 mt-24 font-sans text-6xl text-center md:mt-0 leading-sung md:text-8xl text-light">
          React Movies App
        </motion.header>
        <SearchFn />
        {/* <GenreList searchGenre={(genre) => setGenre(genre)} /> */}
        {/* <button onClick={handleActive} className="px-4 py-3 text-2xl rounded-md bg-dark text-light">
          Get Genres <i class="relative top-[2px] ml-2 fas fa-chevron-down"></i>
        </button> */}
      </div>
    </>
  );
};

export default Header;
