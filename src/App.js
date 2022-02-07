import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
// import Footer from "./components/GenreList";
// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Nav from "./components/Nav";
// import Genre from "./components/Genre";
// import SearchMovies from "./components/SearchMovies";
// import MovieDetails from "./components/MovieDetails";

const App = () => {
  // const [genre, setGenre] = useState;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Movies />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
      {/* <Footer /> */}
      <Nav />
    </BrowserRouter>
  );
};

export default App;
