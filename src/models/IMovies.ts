import {IMovie} from './IMovie';

export interface IMovies{
    page?: number;
    results: IMovie[];
}