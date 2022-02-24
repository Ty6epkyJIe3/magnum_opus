import React from 'react';
import { GenresBlockStyled } from './GenresBlock.styles';
import { genres } from '../../utils/genres';
import { GenreButton } from '../GenreButton/GenreButton';

export const GenresBlock = () => {
  return (
    <GenresBlockStyled>
      {genres.map((genre) => (
        <GenreButton key={genre.id} genre={genre} />
      ))}
    </GenresBlockStyled>
  );
};
