import React from 'react';
import {moviesAPI} from '../../services/MoviesService';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {NavBar} from '../../components/NavBar/NavBar';

export const NowPlayingMovies = () => {
  const {data: movies, error, isLoading} = moviesAPI.useFetchNowPlayingMoviesQuery('RU');
  return (
    <div>
      <NavBar/>
      <h1>Now playing</h1>
      <div className="list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {movies && movies.results.map(movie =>
          <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>

  );
};