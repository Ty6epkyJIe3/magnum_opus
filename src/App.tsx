import React from 'react';
import './App.css';
import {PopularMovies} from './pages/PopularMovies/PopularMovies';
import {TopRatedMovies} from "./pages/TopRatedMovies/TopRatedMovies";
import {NowPlayingMovies} from './pages/NowPlayingMovies/NowPlayingMovies';
import {UpcomingMovies} from "./pages/UpcomingMovies/UpcomingMovies";

export function App() {
  return (
    <div className="App">
      <UpcomingMovies/>
    </div>
  );
}

