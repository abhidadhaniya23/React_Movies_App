import SearchFn from "./SearchFn";
import { useState } from "react";

const Header = () => {
  const [term, setTerm] = useState("");
  return (
    <>
      <div className="header-bg min-h-[35rem] flex flex-col justify-center items-center">
        <header className="py-10 text-8xl text-light font-sans text-center">React Movies App</header>
        <SearchFn searchMovie={(txt) => setTerm(txt)} />
      </div>
    </>
  );
};

export default Header;
