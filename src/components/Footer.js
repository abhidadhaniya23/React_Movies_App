import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Footer = () => {
  const [genreItem, setGenreItem] = useState([]);
  useEffect(async () => {
    const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const data = await genre.json();
    await setGenreItem(data.genres);
    //https://api.themoviedb.org/3/discover/movie?with_genres=10752&api_key=f6477bc057f6bfbd595d7f9c2304c321
    //https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US
  }, []);
  return (
    <div className="bg-dark">
      <div className="container mx-auto text-xl flex justify-center items-center flex-wrap p-4">
        {genreItem.map((item) => (
          <Link key={item.id} className="m-3 bg-light py-2 px-3 rounded-md" to={`genre/${item.name.replace(" ", "-")}/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
