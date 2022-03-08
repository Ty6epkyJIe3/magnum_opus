import React from "react";
import { moviesAPI } from "../../services/MoviesService";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Header } from "../../components/Header/Header";

export const PopularMovies = () => {
  const {
    data: movies,
    error,
    isLoading,
  } = moviesAPI.useFetchPopularMoviesQuery(1);
  return (
    <>
      <Header />
      <div className="list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {movies &&
          movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
};
