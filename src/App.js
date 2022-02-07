import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Genre from "./components/Genre";
import SearchMovies from "./components/SearchMovies";
// import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Movies />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Search-Movie" element={<SearchMovies />} />
      </Routes>
      <Nav />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
