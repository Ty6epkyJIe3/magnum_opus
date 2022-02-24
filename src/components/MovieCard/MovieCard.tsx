import React, { FC } from 'react';
import { IMovie } from '../../models/IMovie';
import { MovieCardStyled } from './MovieCard.styles';
import {Link} from 'react-router-dom';

interface MoviesItemProps {
  movie: IMovie;
}

export const MovieCard: FC<MoviesItemProps> = ({ movie }) => {
  return (
    <MovieCardStyled>
      <Link key={movie.id} to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.title}</p>
      </Link>
    </MovieCardStyled>
  );
};
