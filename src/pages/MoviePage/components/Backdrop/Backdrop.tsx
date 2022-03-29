import React, { FC } from "react";
import { BackdropStyled } from "./Backdrop.styles";

interface MovieDetailsProps {
  backdrop_path?: string;
}

export const Backdrop: FC<MovieDetailsProps> = ({ backdrop_path }) => {
  return (
    <BackdropStyled
      src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
    />
  );
};
