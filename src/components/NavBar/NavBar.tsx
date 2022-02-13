import React from 'react';
import {NavBarStyled} from './NavBar.styles';

export const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="dropdown__content"/>
      </div>
    </NavBarStyled>
  );
};
