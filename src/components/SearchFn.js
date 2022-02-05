import { useState } from "react";
import { Link } from "react-router-dom";

const SearchFn = () => {
  const [txt, setTxt] = useState("");

  const searchMovieFn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form onSubmit={searchMovieFn} className="w-full mx-auto text-center">
        <input type="text" onChange={(e) => setTxt(e.target.value)} className={`md:w-[30rem] text-xl p-4 duration-200 border-2 border-transparent rounded-md w-[85%] shadow-lg outline-none focus:border-blue-700`} placeholder="Search for any images" />
        <a className={`absolute p-3 text-white duration-300 translate-y-[0.45rem] -translate-x-[5rem] bg-blue-600 rounded-md shadow-md focus:bg-blue-800`}>Search</a>
      </form>
    </div>
  );
};

export default SearchFn;
