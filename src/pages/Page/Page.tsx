import React, {useEffect, useState} from 'react';
import {moviesAPI} from '../../services/MoviesService';
import {Header} from '../../components/Header/Header';
import {MovieCard} from '../../components/MovieCard/MovieCard';
import {Pagination} from '../../components/Pagination/Pagination';
import {useParams} from 'react-router-dom';

export const Page = () => {

  const {option} = useParams() as {option: string};

  const [page, setPage] = useState(parseInt(sessionStorage.getItem(`${option}`) as string));

  sessionStorage.setItem(`${option}`, isNaN(page) ? '1' : page.toString());

  useEffect(() => {
    sessionStorage.setItem(`${option}`, page.toString());
  }, [page]);

  useEffect(() => {
    document.title = option.replace(/_/g, ' ');
  });

  const changePage = (chosen_page: number) => setPage(chosen_page);

  const current_page = isNaN(page) ? 1 : page;

  const {
    data,
    error,
    isLoading,
  } = moviesAPI.useFetchMoviesByUrlTypeQuery({current_page, option});

  return (
    <>
      <Header />
      <h1>{option.replace(/_/g, ' ')}</h1>
      <div className="list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {data &&
        data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
      {data && <Pagination
        changePage={changePage}
        page={page}
        total_pages={data.total_pages}
      />}
    </>
  );
};
