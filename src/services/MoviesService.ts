import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IMovies} from '../models/IMovies';

const API_KEY = '7e9c3cc2569e2d65abfce04276b956fb';
const language = 'en-US';

export const moviesAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<IMovies, number>({
      query: ( page: number ) => ({
        url: '/movie/popular',
        params: {
          api_key: API_KEY,
          language: language,
          page: page
        }
      })
    })
  })
});