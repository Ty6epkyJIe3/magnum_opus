import {IMovie} from "./IMovie";
import {IValueForButton} from "./IValueForButton";

export interface IMovieDetails extends IMovie {
    genres: IValueForButton[];
    backdrop_path?: string;
}