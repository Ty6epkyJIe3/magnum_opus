import React from 'react';
import { GenresBlockStyled } from './GenresBlock.styles';
import { genres } from '../../utils/genres';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const GenresBlock = () => {
  return (
    <GenresBlockStyled>
      {genres.map((genre) => (
        <NavigationButton key={genre.id} value={genre} />
      ))}
    </GenresBlockStyled>
  );
};
