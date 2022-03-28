import React from 'react';
import {NavigationButton} from '../NavigationButton/NavigationButton';
import {navigation} from '../../utils/navigation';
import {NavigationBlockStyled} from './NavigationBlock.styles';

export const NavigationBlock = () => {
  return (
    <NavigationBlockStyled>
      {navigation.map((navigation) => (
        <NavigationButton key={navigation.id} value={navigation} />
      ))}
    </NavigationBlockStyled>
  );
};