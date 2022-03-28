import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoritesReducer} from './reducers/MoviesSlice';
import {moviesAPI} from '../services/MoviesService';


const rootReducer = combineReducers({
  favorites: favoritesReducer,
  [moviesAPI.reducerPath]: moviesAPI.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesAPI.middleware)
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
