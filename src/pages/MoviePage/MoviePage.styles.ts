import styled from "styled-components";
import { Link } from "react-router-dom";

export const ActorCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`;

export const DescriptionBlock = styled.span`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 5%;
  left: 5%;
`;

export const TitleStyled = styled.span`
  font-size: 8vw;
  color: white;
  font-weight: bold;
  margin-bottom: 1.5vw;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000000;
  text-shadow: 4px 4px 0px #a3a3a3;
`;

export const Genre = styled.span`
  background-color: #ba2323;
  padding: 1vw;
  margin-right: 5px;
  color: white;
  font-weight: bold;
  font-size: 2vw;
  border-radius: 10px;
`;

export const Block = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const DescriptionText = styled.span`
  font-size: 2vw;
  color: white;
  font-weight: bold;
  margin-top: 1.5vmin;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  text-shadow: 2px 2px 0px #a3a3a3;
  width: 45vw;
`;

export const GenreBlock = styled.div`
  height: 4vw;
`;

export const GenreLink = styled(Link)`
  height: 4vw;
  bottom: 0;
`;

export const MissingBackdrop = styled.div`
  width: 100vw;
  height: 56vw;
  background-color: dimgray;
`;
