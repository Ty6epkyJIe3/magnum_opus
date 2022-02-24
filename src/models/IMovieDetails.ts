import {IMovie} from "./IMovie";
import {IGenre} from "./IGenre";

export interface IMovieDetails extends IMovie {
    genres: IGenre[];
    backdrop_path?: string;
}