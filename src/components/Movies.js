import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [genreID, setGenreID] = useState();
  const [genreList, setGenreList] = useState([]);
  // const [movieName, setMovieName] = useState(MovieNameToSearch);
  // const [searchedMovie, setSearchedMovie] = useState([]);

  const perviousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  const getGenreList = async () => {
    const genreListApi = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    setGenreList(genreListApi.data.genres);
  };

  // useEffect(async () => {
  //   const searchMovieItems = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${MovieNameToSearch}&page=${page}`);
  //   setPage(1);
  //   setMovie(searchMovieItems.data.results);
  //   // movie(searchMovieItems.data.results);
  // }, [MovieNameToSearch]);

  useEffect(() => {
    getGenreList();
  }, []);

  useEffect(async () => {
    if (genreID || page > 1) {
      window.scroll(0, 530);
    } else {
      window.scroll(0, 0);
    }
    const movieGenreApi = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=${API_KEY}&page=${page}`;
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`;

    if (genreID) {
      const genreMovies = await axios.get(movieGenreApi);
      setMovie(genreMovies.data.results);
    } else {
      const movies = await axios.get(FEATURED_API);
      setMovie(movies.data.results);
    }
  }, [page, genreID]);

  return (
    <>
      <motion.div initial={{ opacity: 0, top: -30, position: "relative" }} animate={{ opacity: 1, top: 0 }} transition={{ duration: 0.4, delay: 0.5 }} className="container flex flex-row flex-wrap items-center justify-center px-2 mx-auto mb-10 mt-14 md:px-20">
        {genreList.map((genre) => (
          <button
            className="text-lg md:text-xl"
            key={genre.id}
            onClick={() => {
              setGenreID(genre.id);
              setPage(1);
            }}
            className={`mx-2 my-2 !py-[0.4rem] !px-[0.8rem] text-lg btn ${genre.id === genreID ? "bg-dark text-light" : "bg-light"}`}
          >
            {genre.name}
          </button>
        ))}
      </motion.div>
      <div className="py-8 bg-gray-100 min-h-[20rem]">
        <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
          {movie.map((item) => (
            <MovieCard key={item.id} movieItem={item} />
          ))}
        </div>
      </div>
      <div className={` flex flex-col items-center justify-center py-5 text-lg md:text-2xl bg-gray-100 md:flex-row mb-[7rem]`}>
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
