import axios from "axios";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const MovieCard = ({ movieItem }) => {
  const [video, setVideo] = useState("");
  const [item, setItem] = useState();
  // const [media, setMedia] = useState("");
  // const [Id, setId] = useState("");
  const [active, setActive] = useState(false);

  const handleMovieContent = async (id, media) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const movieData = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setVideo(data.results[0]?.key);
    setItem(movieData.data);
    setActive(true);
  };
  const handleActive = () => {
    setActive(false);
  };

  const IMG_API = `https://image.tmdb.org/t/p/w780`;
  const POSTER_API = `https://image.tmdb.org/t/p/w1280`;

  return (
    <>
      {active ? (
        <>
          <motion.div animate={{ opacity: 1, top: 20 }} transition={{ delay: 0.3 }} className="fixed top-0 z-30 flex flex-col justify-center opacity-0 bg-gray-50">
            <div className="flex flex-col items-center justify-center w-[50rem] mx-auto overflow-hidden text-center bg-gray-50">
              <div className="min-h-[28rem]">
                <img className="w-full mx-auto" src={`${POSTER_API}${item.backdrop_path}`} alt="" />
              </div>
              <h2 className="my-3 text-5xl text-gray-900">{item.title || item.original_name || item.original_title}</h2>
              <p className="px-4 my-2 text-xl text-gray-700">{item.overview.slice(0, 230)}...</p>
              <div className="flex flex-row items-center justify-center mt-5">
                {item.genres.map((genre) => (
                  <p className="px-2 py-1 mx-1 text-base text-gray-900 bg-gray-200 rounded-md">{genre.name}</p>
                ))}
              </div>
              <a target="_blank" className="btn bg-light my-7" href={`https://www.youtube.com/watch?v=${video}`}>
                Watch Trailer
              </a>
            </div>
            <button onClick={handleActive} className="btn bg-light text-dark">
              Close
            </button>
          </motion.div>
          <motion.div animate={{ opacity: 0.8 }} transition={{ delay: 0 }} className="fixed duration-300 -top-[0rem] z-20 justify-center w-full h-screen bg-black opacity-0"></motion.div>
        </>
      ) : (
        <p></p>
      )}
      <div onClick={() => handleMovieContent(movieItem.id, movieItem.media_type || "movie")} className="relative m-5 duration-300 bg-white rounded-md cursor-pointer card-shadow w-80">
        {movieItem.vote_average > 7.5 ? <span className="absolute z-10 flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full -top-5 -right-5 text-green bg-dark">{movieItem.vote_average}</span> : movieItem.vote_average > 6 ? <span className="absolute z-10 flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full -top-5 -right-5 text-yellow bg-dark">{movieItem.vote_average}</span> : <span className="absolute z-10 flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full -top-5 -right-5 text-red bg-dark">{movieItem.vote_average}</span>}
        <div className="w-full overflow-hidden h-[30rem]">{!movieItem.poster_path ? <LazyLoadImage src={`https://i.pinimg.com/originals/51/9c/18/519c18a68160ffb6d5aa5d92cd1e3d59.jpg`} alt="" effect="blur" /> : <LazyLoadImage className="hover-scale-duration hover:scale-110" src={`${IMG_API}${movieItem.poster_path}`} alt="" effect="blur" />}</div>
        <div className="flex flex-row items-center justify-center p-3 text-2xl">
          <span className="text-center">{movieItem.title || movieItem.name || movieItem.original_title || movieItem.original_name}</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
