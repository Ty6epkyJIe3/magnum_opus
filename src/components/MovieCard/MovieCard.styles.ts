import styled from "styled-components";

export const MovieCardStyled = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  transition: transform 0.2s;
  background-color: white;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.16);
  margin: 0 10px 30px 10px;
  text-align: center;
  z-index: 99;
  &:hover {
    transform: scale(1.1);
  }
`;

export const HeartStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 32px;
  cursor: pointer;
  -webkit-text-stroke: 2px black;
  &::before {
    font-size: 2em;
    color: white;
    content: '♥';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    font-size: 2em;
    color: red;
    content: '♥';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s;
  }
  &.liked::after {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;