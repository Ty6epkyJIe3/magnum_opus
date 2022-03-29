import React, { useEffect } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Header } from "../../components/Header/Header";
import { useAppSelector } from "../../hooks/redux";
import { CardsContainer } from "./Favorites.styles";

export const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites";
  });

  const { favorites } = useAppSelector((state) => state.favorites);

  return (
    <>
      <Header />
      <h1>Favorites</h1>
      <CardsContainer>
        {favorites &&
          favorites.map((movie) => (
            <>
              <MovieCard key={movie.id} movie={movie} />
            </>
          ))}
      </CardsContainer>
    </>
  );
};
