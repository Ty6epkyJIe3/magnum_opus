import React, { FC } from "react";
import { NavigationButtonStyled } from "./NavigationButton.styles";
import { IValueForButton } from "../../models/IValueForButton";
import { Link } from "react-router-dom";
import { navigation } from "../../utils/navigation";

interface NavigationButtonProps {
  value: IValueForButton;
}

export const NavigationButton: FC<NavigationButtonProps> = ({ value }) => {
  return (
    <Link
      to={
        navigation.includes(value)
          ? `/pages/${value.name}`
          : `/genres/${value.name}`
      }
    >
      <NavigationButtonStyled>
        {value.name[0].toUpperCase() + value.name.slice(1).replace(/_/g, " ")}
      </NavigationButtonStyled>
    </Link>
  );
};
