import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { moviesAPI } from "../../services/MoviesService";
import { Backdrop } from "./components/Backdrop/Backdrop";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ActorCard } from "./components/ActorCard/ActorCard";
import {
  ActorCardsContainer,
  DescriptionBlock,
  TitleStyled,
  Genre,
  Block,
  DescriptionText,
  GenreBlock,
  GenreLink,
  MissingBackdrop,
} from "./MoviePage.styles";

export const MoviePage = () => {
  const { movie_id } = useParams();
  const { data: movie, error } = moviesAPI.useFetchDetailsQuery(movie_id);

  useEffect(() => {
    document.title = `${movie ? movie.title : error}`;
  });

  return (
    <>
      <Header />
      {movie && (
        <Block>
          {movie.backdrop_path && (
            <Backdrop backdrop_path={movie.backdrop_path} />
          )}
          {!movie.backdrop_path && <MissingBackdrop />}
          <DescriptionBlock>
            <TitleStyled>{movie.title}</TitleStyled>
            <GenreBlock>
              {movie.genres.map((genre) => (
                <GenreLink key={genre.id} to={`/genres/${genre.name}`}>
                  <Genre>{genre.name}</Genre>
                </GenreLink>
              ))}
            </GenreBlock>
            <DescriptionText>
              {movie.overview && movie.overview.length < 400
                ? movie.overview
                : movie.overview &&
                  movie.overview.substr(0, 400).concat("", "...")}
            </DescriptionText>
          </DescriptionBlock>
        </Block>
      )}
      {movie && movie.credits.cast.length > 0 && (
        <>
          <h1>cast</h1>
          <ActorCardsContainer>
            {movie.credits.cast.map((actor) => (
              <ActorCard
                key={actor.id}
                name={actor.name}
                url={actor.profile_path}
              />
            ))}
          </ActorCardsContainer>
        </>
      )}
      {movie && movie.credits.cast.length == 0 && <h1> no cast available</h1>}
    </>
  );
};
