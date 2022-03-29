import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { MoviesByGenrePage } from "./pages/MoviesByGenrePage/MoviesByGenrePage";
import { Page } from "./pages/Page/Page";
import { Favorites } from "./pages/Favorites/Favorites";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/movies/:movie_id"} element={<MoviePage />} />
        <Route path={"/genres/:genre_name"} element={<MoviesByGenrePage />} />
        <Route path={"/pages/:option"} element={<Page />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>
    </div>
  );
}
