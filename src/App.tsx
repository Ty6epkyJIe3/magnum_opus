import React from 'react';
import './App.css';
import {PopularMoviesContainer} from './components/PopularMovies/PopularMoviesContainer';
import {NavBar} from './components/NavBar/NavBar';

export function App() {
  return (
    <div className="App">
      <NavBar/>
      <PopularMoviesContainer/>
    </div>
  );
}

