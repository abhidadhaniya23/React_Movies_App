import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "./MovieItem";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Genre = () => {
  const [loading, setLoading] = useState(true);
  const [genreID, setGenreID] = useState();
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    setGenreID(id);
    console.log("1");
    const movieGenreApi = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=${API_KEY}&page=1`;
    console.log("2");
    const { data } = await axios.get(movieGenreApi);
    console.log("3");
    console.log(data.results);
    setMovie(data.results);
    console.log(movie);
    console.log("4");
  };

  useEffect(() => {
    console.log("5");
    setLoading(true);
    fetchData();
    console.log("6");
    // try {
    //   fetch(movieGenreApi)
    //     .then((response) => response.json())
    //     .then((json) => setMovie(json.results))
    //     .catch((err) => console.log(err));
    //   console.log(movie);
    // } catch (err) {
    //   console.log(err);
    // }
    // setTimeout(() => {
    setLoading(false);
    // }, 950);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="lds-hourglass my-[5rem] mx-auto !w-full"></div>
      ) : (
        <div className="container flex flex-row flex-wrap items-center justify-center mx-auto">
          {movie.map((item, index) => (
            <MovieItem key={index} movieItem={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Genre;
