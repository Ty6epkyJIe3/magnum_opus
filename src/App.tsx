import React from 'react';
import './App.css';
import { PopularMovies } from './pages/PopularMovies/PopularMovies';
import { TopRatedMovies } from './pages/TopRatedMovies/TopRatedMovies';
import { NowPlayingMovies } from './pages/NowPlayingMovies/NowPlayingMovies';
import { UpcomingMovies } from './pages/UpcomingMovies/UpcomingMovies';
import { Route, Routes } from 'react-router-dom';
import {MoviePage} from './pages/MoviePage/MoviePage';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/magnum_opus/'} element={<NowPlayingMovies />} />
        <Route path={'/magnum_opus/popular'} element={<PopularMovies />} />
        <Route path={'/magnum_opus/top_rated'} element={<TopRatedMovies />} />
        <Route path={'/magnum_opus/upcoming'} element={<UpcomingMovies />} />
        <Route path={'/movies/:movie_id'} element={<MoviePage/>} />
        <Route path={'/genres/:genre_id'} element={<MoviePage/>} />
      </Routes>
    </div>
  );
}
