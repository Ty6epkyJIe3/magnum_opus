import React, { useEffect, useState } from "react";
import { moviesAPI } from "../../services/MoviesService";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Header } from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import { genres } from "../../utils/genres";
import { CardsContainer } from "./MoviesByGenrePage.styles";

export const MoviesByGenrePage = () => {
  const { genre_name } = useParams();

  const genre_id = genres.find((genre) => genre.name === genre_name)!.id;

  /*const [page, setPage] = useState(
    parseInt(sessionStorage.getItem(`${genre_name}_page`) as string)
  );

  sessionStorage.setItem(
    `${genre_name}_page`,
    isNaN(page) ? "1" : page.toString()
  );

  useEffect(() => {
    sessionStorage.setItem(`${genre_name}_page`, page.toString());
  }, [page]);

  const changePage = (chosen_page: number) => setPage(chosen_page);

  const current_page = isNaN(page) ? 1 : page;*/

  const [page, setPage] = useState(1);

  const changePage = (chosen_page: number) => setPage(chosen_page);

  useEffect(() => {
    document.title = `${genre_name}`;
  });

  const { data, error, isLoading } = moviesAPI.useFetchMoviesByGenreQuery({
    page, //current page
    genre_id,
  });
  return (
    <>
      <Header />
      <h1>{genre_name}</h1>
      <CardsContainer>
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {data &&
          data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </CardsContainer>
      {data && (
        <Pagination
          changePage={changePage}
          page={page}
          total_pages={data.total_pages}
        />
      )}
    </>
  );
};
