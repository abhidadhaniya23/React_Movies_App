import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const IMG_API = `https://image.tmdb.org/t/p/w780`;

const SearchMovies = () => {
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  const [movieName, setMovieName] = useState(`${name}`);
  console.log(movieName, name);
  const [movie, setMovie] = useState([]);

  useEffect(async () => {
    setMovieName(name);
    setLoading(true);
    const movieSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
    try {
      fetch(movieSearchApi)
        .then((response) => response.json())
        .then((json) => setMovie(json.results[0]))
        .catch((err) => console.log("Data not fetching from API"));
    } catch (err) {
      console.log("err");
    }
    setTimeout(() => {
      setLoading(false);
    }, 950);
  }, [name]);

  return (
    <>
      {loading ? (
        <div className="lds-hourglass my-[5rem] mx-auto !w-full"></div>
      ) : (
        <div>
          <div className="container mx-auto my-10">
            <div className="w-full min-h-[50rem] text-center overflow-hidden">
              <img className="!w-full rounded-md shadow-lg" src={`${IMG_API}${movie.backdrop_path}`} alt="" />
              <h1 className="my-5 text-5xl text-dark">{movie.title}</h1>
              <p className="max-w-5xl mx-auto my-3 leading-5">{movie.overview}</p>
              <p className="mt-2 mb-4 text-xl">Released on : {movie.release_date}</p>
              <div className="w-20 h-20 mx-auto">
                <CircularProgressbar styles={buildStyles({ textColor: "#000742", pathColor: `rgba(0, 7, 66, ${(movie.vote_average * 10) / 100})` })} value={movie.vote_average * 10} text={`${movie.vote_average * 10}%`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchMovies;
