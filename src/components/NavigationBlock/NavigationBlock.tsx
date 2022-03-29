import React, { FC } from "react";
import { NavigationBlockStyled } from "./NavigationBlock.styles";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { IValueForButton } from "../../models/IValueForButton";

interface IDataForBlock {
  data: IValueForButton[];
}

export const NavigationBlock: FC<IDataForBlock> = ({ data }) => {
  return (
    <NavigationBlockStyled>
      {data.map((item) => (
        <NavigationButton key={item.id} value={item} />
      ))}
    </NavigationBlockStyled>
  );
};
