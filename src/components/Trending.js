import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const perviousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(async () => {
    if (page > 1) {
      window.scroll(0, 530);
    } else {
      window.scroll(0, 0);
    }
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    setMovies(data.results);
  }, [page]);

  return (
    <>
      <div className="py-8 bg-gray-100 min-h-[50rem]">
        <div className="container flex flex-row flex-wrap items-center justify-center mx-auto bg-gray-100">
          {movies.map((item, index) => (
            <MovieCard key={index} movieItem={item} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-5 md:flex-row mb-[7rem]">
          <button onClick={perviousPage} className={`mx-3 text-md md:text-xl btn text-dark ${page === 1 ? "bg-gray-200 cursor-default !border-gray-400" : "bg-light"}`}>
            Previous Page
          </button>
          <span className="flex items-center justify-center w-10 h-10 my-3 rounded-full md:my-0 md:w-14 md:h-14 bg-dark text-light">{page}</span>
          <button onClick={nextPage} className={`mx-3 text-md md:text-xl btn text-dark ${page === movies.length ? "bg-gray-200 cursor-default !border-gray-400" : "bg-light"}`}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Trending;
