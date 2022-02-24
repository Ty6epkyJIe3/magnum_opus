import React, {FC} from 'react';
import {GenreButtonStyled} from './GenreButton.styles';
import {IGenre} from '../../models/IGenre';
import {Link} from 'react-router-dom';

interface GenreButtonProps {
  genre: IGenre
}

export const GenreButton: FC<GenreButtonProps> = ({genre}) => {
  return (
    <Link  to={`/genre/${genre.name}`}>
      <GenreButtonStyled>
        {genre.name}
      </GenreButtonStyled>
    </Link>
  );
};