import {IMovie} from '../../models/IMovie';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface MoviesState {
  results: IMovie[];
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  results: [],
  isLoading: false,
  error: ''
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies(state) {
      state.isLoading = true;
    },
    fetchMoviesSuccess(state, action: PayloadAction<IMovie[]>) {
      state.isLoading = false;
      state.error = '';
      state.results = action.payload;
    },
    fetchMoviesError(state) {
      state.isLoading = false;
      state.error = 'Произошла ошибка';
    }
  }
});

//export const {fetchMovies, fetchMoviesSuccess, fetchMoviesError} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;