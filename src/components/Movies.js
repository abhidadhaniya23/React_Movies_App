import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = () => {
  const [movie, setMovie] = useState([]);
  // let [page, setPage] = useState(1);
  // const [term, setTerm] = useState("");

  useEffect(async () => {
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    // const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`;
    // const IMG_API = `https://image.tmdb.org/t/p/w1280`;

    const movies = await fetch(FEATURED_API);
    const data = await movies.json();
    setMovie(data.results);
  }, []);

  return (
    <>
      <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
        {movie.map((item, index) => (
          <MovieCard key={index} movieItem={item} />
        ))}
      </div>
      {/* <div className="flex items-center justify-center my-5 text-2xl">
        <button onClick={perviousPage} className="px-5 py-3 mx-2 rounded-md bg-dark text-light">
          Previous Page
        </button>
        <button onClick={nextPage} className="px-5 py-3 mx-2 rounded-md bg-dark text-light">
          Next Page
        </button>
      </div> */}
    </>
  );
};

export default Movies;
