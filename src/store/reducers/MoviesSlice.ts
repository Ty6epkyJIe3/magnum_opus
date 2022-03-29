import { IMovie } from "../../models/IMovie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  favorites: IMovie[];
}

const initialState: MoviesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<IMovie>) {
      state.favorites.push(action.payload);
    },
    deleteMovie(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, deleteMovie } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
