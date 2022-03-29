import React, { FC } from "react";
import { IMovie } from "../../models/IMovie";
import {
  MovieCardStyled,
  HeartStyled,
  MissingImg,
  ImgIcon,
  TitleStyled,
} from "./MovieCard.styles";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addMovie, deleteMovie } from "../../store/reducers/MoviesSlice";
import { ImgSvg } from "../../assets/svg";

interface MoviesItemProps {
  movie: IMovie;
}

export const MovieCard: FC<MoviesItemProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorites);

  const handleOnClick = () => {
    if (favorites.includes(movie)) {
      dispatch(deleteMovie(movie.id));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return (
    <MovieCardStyled>
      <HeartStyled
        className={favorites.includes(movie) ? "liked" : ""}
        onClick={handleOnClick}
      >
        ❤
      </HeartStyled>
      <Link to={`/movies/${movie.id}`}>
        {movie.poster_path && (
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        )}
        {!movie.poster_path && (
          <>
            <ImgIcon>
              <ImgSvg />
            </ImgIcon>
            <MissingImg />
          </>
        )}
        <TitleStyled>{movie.title}</TitleStyled>
      </Link>
    </MovieCardStyled>
  );
};
