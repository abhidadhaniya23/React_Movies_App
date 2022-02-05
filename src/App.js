import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/GenreList";
import { useEffect, useState } from "react";
// import Genre from "./components/Genre";
// import SearchMovies from "./components/SearchMovies";
// import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [genre, setGenre] = useState;
  useEffect(() => {}, [genre]);
  return (
    <>
      <Header searchGenre={(genre) => setGenre(genre)} />
      <Movies genre={}/>
      {/* <Route path="/genre/:genre/:id" element={<Genre />} />
      <Route path="/movie/:name/:id" element={<MovieDetails />} />
      <Route path="/movie/:name" exact element={<SearchMovies />} /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
