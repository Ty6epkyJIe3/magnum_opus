import { moviesAPI } from "../../services/MoviesService";
import { Header } from "../../components/Header/Header";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import React from "react";

export const UpcomingMovies = () => {
  const {
    data: movies,
    error,
    isLoading,
  } = moviesAPI.useFetchUpcomingMoviesQuery(1);
  return (
    <div>
      <Header />
      <div className="list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {movies &&
          movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};
