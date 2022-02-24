import React from 'react';
import { HeaderStyled } from './Header.styles';
import {GenresBlock} from '../GenresBlock/GenresBlock';

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="dropdown__content">
          <GenresBlock/>
        </div>
      </div>
    </HeaderStyled>
  );
};
