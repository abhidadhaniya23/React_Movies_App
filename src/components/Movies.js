import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = ({ genre, movies }) => {
  const [movie, setMovie] = useState([]);
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
    window.scroll(0, 0);
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`;
    // const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;
    // const IMG_API = `https://image.tmdb.org/t/p/w1280`;

    const movies = await fetch(FEATURED_API);
    const data = await movies.json();
    setMovie(data.results);
  }, [page]);

  return (
    <>
      <div className="py-8 bg-gray-100">
        <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
          {movie.map((item, index) => (
            <MovieCard key={index} movieItem={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-5 text-2xl bg-gray-100 md:flex-row">
        <button onClick={perviousPage} className={`mx-3 btn text-dark ${page === 1 ? "bg-gray-200 cursor-default !border-gray-400" : "bg-light"}`}>
          Previous Page
        </button>
        <span className="flex items-center justify-center w-10 h-10 my-3 rounded-full md:my-0 md:w-14 md:h-14 bg-dark text-light">{page}</span>
        <button onClick={nextPage} className={`mx-3 btn text-dark ${page === movie.length ? "bg-gray-200 cursor-default !border-gray-400" : "bg-light"}`}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default Movies;
