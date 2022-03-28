import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import {moviesAPI} from '../../services/MoviesService';
import {Backdrop} from './components/Backdrop/Backdrop';

export const MoviePage = () => {
  const {movie_id} = useParams();
  const {data: movie, error} = moviesAPI.useFetchDetailsQuery(movie_id);

  useEffect(() => {
    document.title = `${movie ? movie.title : error}`;
  },);

  return (
    <>
      <Header/>
      {movie && movie.backdrop_path && (
        <div className='block'>
          <Backdrop backdrop_path={movie.backdrop_path}/>
          <span className='description_block'>
            <span className='i_position_absolute_top'>{movie.title}</span>
            <div className='genre__block'>
              {movie.genres.map((genre) => (
                <Link  className='genre_link' key={genre.id} to={`/genre/${genre.name}`}>
                  <span className='genre'>{genre.name}</span>
                </Link>
              ))}    
            </div>
            <span className='description__text'>
              {movie.overview && movie.overview.length < 400 ?
                movie.overview :
                movie.overview && movie.overview.substr(0,400).concat('','...')}
            </span>
          </span>
        </div>)}
    </>
  );
};
