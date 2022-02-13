import React, {FC} from 'react';
import {IMovie} from '../../models/IMovie';
import {MovieCardStyled} from './MovieCard.styles';

interface MoviesItemProps {
    movie: IMovie
}

export const MovieCard: FC<MoviesItemProps> = ({movie}) => {
  const API_KEY = '7e9c3cc2569e2d65abfce04276b956fb';
  return (
    <MovieCardStyled>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
      <p>{movie.title}</p>
    </MovieCardStyled>
  );
};