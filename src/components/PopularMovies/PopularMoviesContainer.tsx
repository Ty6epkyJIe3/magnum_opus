import React from 'react';
import {moviesAPI} from '../../services/MoviesService';
import { nanoid } from 'nanoid';
import {MovieCard} from '../MovieCard/MovieCard';
import {PopularMoviesContainerStyled} from './PopularMoviesContainer.styles';

export const PopularMoviesContainer = () => {
  const {data: movies, error, isLoading} = moviesAPI.useFetchPopularMoviesQuery(1);
  return (
    <PopularMoviesContainerStyled>
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>Ошибка</h1>}
      {movies && movies.results.map(movie =>
        <MovieCard key={nanoid()} movie={movie}/>)}
    </PopularMoviesContainerStyled>
  );
};
