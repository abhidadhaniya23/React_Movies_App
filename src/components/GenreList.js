import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const GenreList = ({ searchGenre }) => {
  const [genreItem, setGenreItem] = useState([]);
  const [genre, setGenre] = useState();

  const handleGenre = (event) => {
    event.preventDefault();
    setGenre(event.target.value);
    searchGenre(genre);
  };

  useEffect(async () => {
    const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const data = await genre.json();
    setGenreItem(data.genres);
  }, []);

  return (
    <select
      onChange={
        ((e) => {
          setGenre(e.target.id);
        },
        handleGenre)
      }
      className="bg-dark py-2 px-5 text-xl rounded-md text-light"
    >
      {genreItem.map((item) => (
        <option key={item.id} id={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default GenreList;
