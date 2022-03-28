import React, {useEffect} from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Header } from '../../components/Header/Header';
import {useAppSelector} from '../../hooks/redux';

export const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites';
  });

  const {favorites} = useAppSelector((state => state.favorites));

  return (
    <>
      <Header />
      <h1>Favorites</h1>
      <div className="list">
        {favorites &&
        favorites.map((movie) => (
          <>
            <MovieCard key={movie.id} movie={movie}/>
          </>
        ))}
      </div>
    </>
  );
};