import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="fixed bottom-0 z-10 flex flex-row items-center w-full py-3 bg-gray-900 h-min md:top-0 md:py-5 justify-evenly md:justify-center text-light">
      <Link className={`text-center px-1 md:px-4 text-base mx-0.5 md:mx-2 duration-100 hover:opacity-100 active:scale-90 md:text-xl ${location.pathname === "/" ? "opacity-100" : "opacity-60"}`} to="/">
        <i className="md:mr-3 fab fa-typo3"></i>
        <br className="md:hidden" />
        Genres
      </Link>
      <Link className={`text-center px-1 md:px-4 text-base mx-0.5 md:mx-2 duration-100 hover:opacity-100 active:scale-90 md:text-xl ${location.pathname === "/Trending" ? "opacity-100" : "opacity-60"}`} to="/Trending">
        <i className="md:mr-3 fas fa-fire"></i>
        <br className="md:hidden" />
        Trending
      </Link>
      <Link className={`text-center px-1 md:px-4 text-base mx-0.5 md:mx-2 duration-100 hover:opacity-100 active:scale-90 md:text-xl ${location.pathname === "/Search-Movie" ? "opacity-100" : "opacity-60"}`} to="/Search-Movie">
        <i className="md:mr-3 fas fa-search"></i>
        <br className="md:hidden" />
        Search
      </Link>
      <a className="px-1 md:px-4 mx-0.5 text-base text-center duration-100 md:mx-2 active:scale-90 md:text-xl opacity-60 hover:opacity-100" rel="noreferrer" href="http://web-developer-abhi.herokuapp.com/" target="_blank">
        <i className="md:mr-3 fas fa-code"></i>
        <br className="md:hidden" />
        Developer
      </a>
      <a className="px-1 md:px-4 mx-0.5 text-base text-center duration-100 md:mx-2 active:scale-90 md:text-xl opacity-60 hover:opacity-100" rel="noreferrer" href="https://twitter.com/AbhiDadhaniya3" target="_blank">
        <i className="md:mr-3 fab fa-twitter"></i>
        <br className="md:hidden" />
        Follow
      </a>
    </div>
  );
};

export default Nav;
