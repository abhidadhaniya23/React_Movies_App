import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AnimatePresence, motion } from "framer-motion";

const MovieCard = ({ movieItem }) => {
  const [video, setVideo] = useState("");
  const [item, setItem] = useState();
  const [active, setActive] = useState(false);
  const [cast, setCase] = useState([]);

  const handleMovieContent = async (id, media) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const movieData = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const castData = await axios.get(`https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setCase(castData.data.cast);
    setVideo(data.results[0]?.key);
    setItem(movieData.data);
    setActive(true);
  };
  useEffect(() => {
    active ? (document.querySelector("body").style.overflowY = "hidden") : (document.querySelector("body").style.overflowY = "auto");
  }, [active]);

  const IMG_API = `https://image.tmdb.org/t/p/w780`;
  const CAST_IMG_API = `https://image.tmdb.org/t/p/w300`;
  const castImgNotAvailable = `https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg`;
  const COVER_NOT_AVAILABLE = `https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg`;

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {active && (
          <>
            <motion.div animate={{ opacity: 1, top: 20 }} initial={{ top: 0 }} exit={{ top: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="max-h-[85vh] md:max-h-[95vh] fixed z-30 flex flex-col justify-center items-stretch opacity-0 bg-gray-50">
              <div className="flex flex-col items-center justify-start w-[20rem] overflow-y-scroll md:w-[60rem] mx-auto relative text-center bg-gray-50">
                <div className="w-full">
                  <img className="w-full h-full object-cover" src={`${item.backdrop_path ? IMG_API + item.backdrop_path : COVER_NOT_AVAILABLE}`} alt="" />
                </div>
                <h2 className="mt-7 mb-3 text-3xl text-gray-900 md:text-5xl">{item.name || item.title || item.original_name || item.original_title}</h2>
                <p className="px-4 my-2 text-gray-700 text-md md:text-xl">{item.overview.slice(0, 270)}...</p>
                <div className="flex flex-row pb-5 min-h-[18rem] mt-8 mb-5 max-w-full overflow-x-scroll relative">
                  {cast.map((cast) => (
                    <div key={cast.id} className={`flex min-w-[9rem] max-w-[9rem] justify-start items-center overflow-hidden flex-col mx-1 ${!cast.profile_path ? "hidden" : ""}`}>
                      <img className={`rounded-md w-full min-h-[80%]`} src={`${cast.profile_path ? CAST_IMG_API + cast.profile_path : castImgNotAvailable}`} />
                      <p className="text-dark text-lg">{cast.name}</p>
                      <p className={`text-dark text-base ${!cast.character ? "hidden" : ""}`}>({cast.character})</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center mt-3">
                  {item.genres.map((genre) => (
                    <p key={genre.id} className="px-2 py-1 m-1 text-base text-gray-900 bg-light rounded-md">
                      {genre.name}
                    </p>
                  ))}
                </div>
                <a target="_blank" className="text-md btn bg-light my-4" rel="noreferrer" href={`https://www.youtube.com/watch?v=${video}`}>
                  Watch Trailer
                </a>
              </div>
              <button onClick={() => setActive(false)} className="btn bg-light text-dark">
                Close
              </button>
            </motion.div>
            <motion.div animate={{ opacity: 0.8 }} exit={{ opacity: 0 }} onClick={() => setActive(false)} transition={{ duration: 0.4, delay: 0 }} className="fixed -top-[0rem] z-20 justify-center w-full h-screen bg-black opacity-0"></motion.div>
          </>
        )}
      </AnimatePresence>
      <motion.div initial={{ opacity: 0, top: -50, position: "relative" }} animate={{ opacity: 1, top: 0 }} transition={{ duration: 0.3, delay: 0.2 }} onClick={() => handleMovieContent(movieItem.id, movieItem.media_type || "movie")} className={`${movieItem.vote_average === 0 ? "hidden" : ""} relative px-2 pt-2 m-5 duration-300 bg-white rounded-lg cursor-pointer hover:scale-100 md:hover:scale-105 card hover:bg-dark hover:text-light card-shadow w-72 md:w-80`}>
        {movieItem.vote_average > 7.5 ? <span className="absolute z-10 flex items-center justify-center w-12 h-12 font-normal rounded-full md:font-bold text-md md:text-xl -top-5 -right-5 text-green bg-dark">{movieItem.vote_average}</span> : movieItem.vote_average > 6 ? <span className="absolute z-10 flex items-center justify-center w-12 h-12 font-normal rounded-full md:font-bold text-md md:text-xl -top-5 -right-5 text-yellow bg-dark">{movieItem.vote_average}</span> : <span className="absolute z-10 flex items-center justify-center w-12 h-12 font-normal rounded-full md:font-bold text-md md:text-xl -top-5 -right-5 text-red bg-dark">{movieItem.vote_average}</span>}
        <div className="w-full overflow-hidden min-h-[27rem]">{!movieItem.poster_path ? <LazyLoadImage src={`https://i.pinimg.com/originals/51/9c/18/519c18a68160ffb6d5aa5d92cd1e3d59.jpg`} alt="" effect="blur" /> : <LazyLoadImage className="hover-scale-duration" src={`${IMG_API}${movieItem.poster_path}`} alt="" effect="blur" />}</div>
        <div className="flex flex-row items-center justify-center p-3 text-2xl">
          <span className="text-center">{movieItem.name || movieItem.title || movieItem.original_title || movieItem.original_name}</span>
        </div>
      </motion.div>
    </>
  );
};

export default MovieCard;
