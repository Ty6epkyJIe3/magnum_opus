import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovies } from "../models/IMovies";
import { IMovieDetails } from "../models/IMovieDetails";

const language = "en-US";
const { REACT_APP_API_KEY } = process.env;

export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (build) => ({
    fetchDetails: build.query<IMovieDetails, string | undefined>({
      query: (movie_id) => ({
        url: `/movie/${movie_id}`,
        params: {
          api_key: `${REACT_APP_API_KEY}`,
          language: language,
          append_to_response: "credits",
        },
      }),
    }),
    fetchMoviesByGenre: build.query<
      IMovies,
      { page: number; genre_id: number } // current_page
    >({
      query: ({ page, genre_id }) => ({
        // current_page
        url: "/discover/movie",
        params: {
          api_key: `${REACT_APP_API_KEY}`,
          language: language,
          sort_by: "popularity.desc",
          page: page, // current_page
          with_genres: genre_id,
        },
      }),
    }),
    fetchMoviesByUrlType: build.query<
      IMovies,
      { page: number; option: string } // current_page
    >({
      query: ({ page, option }) => ({
        // current_page
        url: `/movie/${option}`,
        params: {
          api_key: `${REACT_APP_API_KEY}`,
          language: language,
          page: page, // current_page
        },
      }),
    }),
    fetchMoviesWithKeywords: build.query<IMovies, string>({
      query: (keyword) => ({
        url: "/search/movie",
        params: {
          api_key: `${REACT_APP_API_KEY}`,
          query: keyword,
          page: 1,
        },
      }),
    }),
  }),
});
