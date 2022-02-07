import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const MovieItem = ({ movieItem }) => {
  const IMG_API = `https://image.tmdb.org/t/p/w780`;

  return (
    <Link to={`/movie/${movieItem.title.replaceAll(" ", "-")}/${movieItem.id}`} className="m-5 overflow-hidden duration-300 rounded-md card-shadow bg-light w-80">
      <div className="w-full overflow-hidden h-[30rem]">{!movieItem.poster_path ? <LazyLoadImage src={`https://i.pinimg.com/originals/51/9c/18/519c18a68160ffb6d5aa5d92cd1e3d59.jpg`} alt="" effect="blur" /> : <LazyLoadImage className="hover-scale-duration hover:scale-110" src={`${IMG_API}${movieItem.poster_path}`} alt="" effect="blur" />}</div>
      <div className="flex flex-row items-center justify-between p-3 text-2xl">
        <span className="mx-2">{movieItem.title}</span>
        {movieItem.vote_average > 7.5 ? <span className="px-4 py-1 mr-2 text-xl font-bold rounded-md text-green bg-dark">{movieItem.vote_average}</span> : movieItem.vote_average > 6 ? <span className="px-4 py-1 mr-2 text-xl font-bold rounded-md text-yellow bg-dark">{movieItem.vote_average}</span> : <span className="px-4 py-1 mr-2 text-xl font-bold rounded-md text-red bg-dark">{movieItem.vote_average}</span>}
      </div>
    </Link>
  );
};

export default MovieItem;
