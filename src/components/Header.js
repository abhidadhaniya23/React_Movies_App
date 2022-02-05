import { useEffect, useState } from "react";
import SearchFn from "./SearchFn";
import GenreList from "./GenreList";

const Header = ({ genreChanged }) => {
  const [genre, setGenre] = useState();
  useEffect(() => {
    genreChanged(genre);
  }, [genre]);
  return (
    <>
      <div className="header-bg min-h-[35rem] flex flex-col justify-center items-center">
        <header className="py-10 text-8xl text-light font-sans text-center">React Movies App</header>
        <SearchFn />
        <GenreList searchGenre={(genre) => setGenre(genre)} />
        {/* <button onClick={handleActive} className="bg-dark py-3 px-4 text-2xl rounded-md text-light">
          Get Genres <i class="relative top-[2px] ml-2 fas fa-chevron-down"></i>
        </button> */}
      </div>
    </>
  );
};

export default Header;
