import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movieName, setMovieName] = useState("spiderman");
  const [movie, setMovie] = useState([]);
  const { name } = useParams();

  useEffect(async () => {
    setMovieName(name);
    setLoading(true);
    const movieSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
    try {
      fetch(movieSearchApi)
        .then((response) => response.json())
        .then((json) => setMovie(json.results))
        .catch((err) => console.log("Data not fetching from API"));
      console.log(movie);
    } catch (err) {
      console.log("err");
    }
    setTimeout(() => {
      setLoading(false);
    }, 950);
    return () => {
      setMovieName(name);
    };
  }, [name]);

  return (
    <>
      {loading ? (
        <div className="lds-hourglass my-[5rem] mx-auto !w-full"></div>
      ) : (
        <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
          {movie.map((item, index) => (
            <MovieCard key={index} movieItem={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchMovies;
