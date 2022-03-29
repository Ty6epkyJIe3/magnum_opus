import React, { useEffect, useState } from "react";
import { moviesAPI } from "../../services/MoviesService";
import { Header } from "../../components/Header/Header";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Pagination } from "../../components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { CardsContainer } from "./Page.styles";

export const Page = () => {
  const { option } = useParams() as { option: string };

  useEffect(() => {
    document.title = option.replace(/_/g, " ");
  });

  /* const [page, setPage] = useState(
    parseInt(sessionStorage.getItem(`${option}`) as string)
  );

  sessionStorage.setItem(`${option}`, isNaN(page) ? "1" : page.toString());

  useEffect(() => {
    sessionStorage.setItem(`${option}`, page.toString());
  }, [page]);

  const changePage = (chosen_page: number) => setPage(chosen_page);

  const current_page = isNaN(page) ? 1 : page;*/

  const [page, setPage] = useState(1);

  const changePage = (chosen_page: number) => setPage(chosen_page);

  const { data, error, isLoading } = moviesAPI.useFetchMoviesByUrlTypeQuery({
    page, // current_page
    option,
  });
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <Header />
      <h1>{option.replace(/_/g, " ")}</h1>
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
