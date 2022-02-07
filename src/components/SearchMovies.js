import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchFn from "./SearchFn";

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [movie, searchMovie] = useState("");
  const [numberOfPages, setNumberOfPages] = useState();

  useEffect(async () => {
    if (page > 1 || movie) {
      window.scroll(0, 500);
    } else {
      window.scroll(0, 0);
    }
    if (movie) {
      const searchMovieData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&page=${page}`);
      setNumberOfPages(searchMovieData.data.total_pages);
      setMovies(searchMovieData.data.results);
    }
  }, [movie, page]);
  return (
    <>
      <SearchFn
        setTerm={(term) => {
          searchMovie(term);
          setPage(1);
        }}
      />
      <div className={`py-8 bg-gray-100 min-h-[20rem] ${!movie ? "hidden" : ""}`}>
        <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
          {movies.map((item) => (
            <MovieCard key={item.id} movieItem={item} />
          ))}
        </div>
      </div>
      <div className={`${!movie ? "opacity-0" : ""} flex flex-col items-center justify-center py-5 text-lg md:text-2xl bg-gray-100 md:flex-row mb-[7rem]`}>
        <button
          onClick={() => {
            page !== 1 ? setPage(page - 1) : setPage(1);
          }}
          className={`mx-3 btn text-dark ${page === 1 ? "bg-gray-200 cursor-default !border-gray-400" : "bg-light"}`}
        >
          Previous Page
        </button>
        <span className="flex items-center justify-center w-10 h-10 my-3 rounded-full md:my-0 md:w-14 md:h-14 bg-dark text-light">{page}</span>
        <button
          onClick={() => {
            numberOfPages !== page ? setPage(page + 1) : setPage(numberOfPages);
          }}
          className={`mx-3 btn text-dark ${page === numberOfPages ? "bg-gray-200 cursor-default !border-gray-400" : "bg-light"}`}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default SearchMovies;
