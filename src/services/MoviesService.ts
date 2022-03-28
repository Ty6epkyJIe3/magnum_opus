import {createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IMovies } from "../models/IMovies";
import {IMovieDetails} from "../models/IMovieDetails";

const API_KEY = "7e9c3cc2569e2d65abfce04276b956fb";
const language = "en-US";

export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (build) => ({
    fetchDetails: build.query<IMovieDetails, string | undefined>({
      query: (movie_id) => ({
        url: `/movie/${movie_id}`,
        params: {
          api_key: API_KEY,
          language: language,
        },
      }),
    }),
    fetchMoviesByGenre: build.query<IMovies, { current_page: number, genre_id: number}>({
      query: ({current_page, genre_id}) => ({
        url: '/discover/movie',
        params: {
          api_key: API_KEY,
          language: language,
          sort_by: 'popularity.desc',
          page: current_page,
          with_genres: genre_id
        },
      }),
    }),
    fetchMoviesByUrlType: build.query<IMovies, { current_page: number, option: string } >({
      query: ({current_page, option}) => ({
        url: `/movie/${option}`,
        params: {
          api_key: API_KEY,
          language: language,
          page: current_page,
        },
      }),
    }),
    fetchMoviesWithKeywords: build.query<IMovies, string>({
      query: (keyword) => ({
        url: '/search/movie',
        params: {
          api_key: API_KEY,
          query: keyword,
          page: 1,
        },
      }),
    }),
  }),
});
