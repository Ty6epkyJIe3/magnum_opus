import React from 'react';
import {moviesAPI} from '../../services/MoviesService';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {NavBar} from '../../components/NavBar/NavBar';


export const TopRatedMovies = () => {
  const {data: movies, error, isLoading} = moviesAPI.useFetchTopRatedMoviesQuery(1);
  return (
    <div>
      <NavBar/>
      <div className="list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {movies && movies.results.map(movie =>
          <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>

  );
};