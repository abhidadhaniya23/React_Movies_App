import { useEffect, useState } from "react";
import SearchFn from "./SearchFn";
import GenreList from "./GenreList";

const Header = () => {
  const [genre, setGenre] = useState();
  // useEffect(() => {
  // }, [genre]);
  return (
    <>
      <div className="header-bg min-h-[35rem] flex flex-col justify-center items-center">
        <header className="py-10 font-sans text-center text-8xl text-light">React Movies App</header>
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
