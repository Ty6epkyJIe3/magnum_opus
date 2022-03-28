import React, {FC} from 'react';
import { HeaderStyled } from './Header.styles';
import {GenresBlock} from '../GenresBlock/GenresBlock';
import {NavigationBlock} from '../NavigationBlock/NavigationBlock';
import {SearchInput} from '../SearchInput/SearchInput';
import {Link} from 'react-router-dom';
import {HeartSvg, MenuSvg} from '../../assets/svg';

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <MenuSvg/>
        <div className="dropdown__content">
          <NavigationBlock/>
          <GenresBlock/>
        </div>
      </div>
      <SearchInput/>
      <Link to={'/Favorites'}>
        <div className="container">
          <HeartSvg/>
        </div>
      </Link>
    </HeaderStyled>
  );
};
