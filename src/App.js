import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Genre from "./components/Genre";
import SearchMovies from "./components/SearchMovies";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [genre, setGenre] = useState("");

  useEffect(() => {
    // all api keys
    const movieGenreApi = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=${API_KEY}&page=1`;
    const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    const movieSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
  }, [genre, movieItem]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Movies />} />
        <Route path="/genre/:genre/:id" element={<Genre />} />
        <Route path="/movie/:name/:id" element={<MovieDetails />} />
        {/* <Route path="/movie/:name" exact element={<SearchMovies />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// function App() {
//   const [lang, setLang] = useState("english");

//   useEffect(() => {
//     setTimeout(() => {
//       setLang("spanish");
//     }, 3000);
//   }, []);

//   return (
//     <div className="App">
//       <h1>Lang:</h1>
//       <p>{lang}</p>
//     </div>
//   );
// }
// export default App;
