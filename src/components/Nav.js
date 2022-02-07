import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="fixed bottom-0 z-10 flex flex-row items-center w-full py-3 bg-gray-900 md:py-5 justify-evenly md:justify-center text-light">
      <Link className={`text-center px-4 text-base duration-300 hover:scale-110 md:text-xl ${location.pathname === "/" ? "opacity-100" : "opacity-60"}`} to="/">
        <i className="fas fa-home"></i>
        <br />
        Home
      </Link>
      <Link className={`text-center px-4 text-base duration-300 hover:scale-110 md:text-xl ${location.pathname === "/trending" ? "opacity-100" : "opacity-60"}`} to="/trending">
        <i className="fas fa-fire"></i>
        <br />
        Trending
      </Link>
    </div>
  );
};

export default Nav;
