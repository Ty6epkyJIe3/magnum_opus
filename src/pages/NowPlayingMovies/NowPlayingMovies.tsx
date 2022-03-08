import React, {useEffect, useState} from 'react';
import { moviesAPI } from '../../services/MoviesService';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Header } from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination/Pagination';

export const NowPlayingMovies = () => {

  const [page, setPage] = useState(parseInt(sessionStorage.getItem('now_playing_page') as string));

  sessionStorage.setItem('now_playing_page', isNaN(page) ? '1' : page.toString());

  useEffect(() => {
    sessionStorage.setItem('now_playing_page', page.toString());
  }, [page]);

  const changePage = (chosen_page: number) => setPage(chosen_page);

  const {
    data,
    error,
    isLoading,
  } = moviesAPI.useFetchNowPlayingMoviesQuery(page);

  return (
    <>
      <Header />
      <h1>Now playing</h1>
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
