import { useState } from "react";
import { motion } from "framer-motion";

const SearchFn = ({ setTerm }) => {
  const [txt, setTxt] = useState("");

  const searchMovieFn = (event) => {
    event.preventDefault();
    setTerm(txt);
  };

  return (
    <div className="flex items-center justify-center w-full my-10">
      <motion.form onSubmit={searchMovieFn} animate={{ top: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }} initial={{ top: -50, position: "relative", opacity: 0 }} className="w-11/12 mx-auto text-center">
        {/* <input type="text" onChange={(e) => setTxt(e.target.value)} className={`md:w-[30rem] w-full text-md md:text-xl p-4 duration-200 border-2 border-transparent rounded-md shadow-lg outline-none focus:border-blue-700`} placeholder="Search for any images" /> */}
        <input type="text" onChange={(e) => setTxt(e.target.value)} className={`md:py-6 md:w-[40rem] w-full text-md md:text-xl p-4 duration-200 border-2 border-transparent rounded-md shadow-lg outline-none focus:border-blue-700`} placeholder="Type to search movie" />
        <button className={`absolute py-3 px-5 text-white duration-300  translate-y-[0.45rem] md:translate-y-[1rem] -translate-x-[5rem] md:-translate-x-[6.7rem] bg-blue-600 rounded-md shadow-md focus:bg-blue-800`}>Search</button>
      </motion.form>
    </div>
  );
};

export default SearchFn;
