import styled from 'styled-components';

export const MovieCardStyled = styled.div`
  width: 300px;
  height: 500px;
  transition: transform .2s;
  background-color: white;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.16);
  margin: 0 10px 30px 10px;
  text-align: center;
  z-index: 99;
  &:hover {
    transform: scale(1.1);
  }
`;
