import { IMovie } from "./IMovie";
import { IValueForButton } from "./IValueForButton";

interface Cast {
  id: number;
  name: string;
  profile_path: string;
  order: number;
}

interface Credits {
  cast: Cast[];
}

export interface IMovieDetails extends IMovie {
  genres: IValueForButton[];
  backdrop_path?: string;
  credits: Credits;
}
