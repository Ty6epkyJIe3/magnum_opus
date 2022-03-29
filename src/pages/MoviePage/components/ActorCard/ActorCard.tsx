import React, { FC } from "react";
import { ActorCardStyled, ActorImgStyled } from "./ActorCard.styles";

interface ActorCardProps {
  name?: string;
  url?: string;
}

export const ActorCard: FC<ActorCardProps> = ({ name, url }) => {
  return (
    <ActorCardStyled>
      <ActorImgStyled src={`https://image.tmdb.org/t/p/w185/${url}`} />
      {name}
    </ActorCardStyled>
  );
};
