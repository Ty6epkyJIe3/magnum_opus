import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import {moviesAPI} from '../../services/MoviesService';
import {Backdrop} from './components/Backdrop/Backdrop';



export const MoviePage = () => {
  const {movie_id} = useParams();
  const {data: movie} = moviesAPI.useFetchDetailsQuery(movie_id);
  return (
    <>
      <Header/>
      {movie && movie.backdrop_path && (
        <div className='block'>
          <Backdrop backdrop_path={movie.backdrop_path}/>
          <span className='description_block'>
            <span className='i_position_absolute_top'>{movie.title}</span>
            <>
              {movie.genres.map((genre) => (
                <Link  key={genre.id} to={`/genre/${genre.name}`}>
                  <span className='genre'>{genre.name}</span>
                </Link>
              ))}    
            </>
            <span className='description__text'>{movie.overview}</span>
          </span>
        </div>)}
    </>
  );
};
