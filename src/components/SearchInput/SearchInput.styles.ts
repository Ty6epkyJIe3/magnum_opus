import styled from 'styled-components';
import withProps from "../../../node_modules/@types/styled-components"

export const SearchInputStyled = styled.input`
  width: 100%;
  margin-top: 4px;
  padding: 12px 0;
  font-size: 1rem;
  border: 0px solid;
  border-radius: 20px;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0px 5px 14px -2px rgba(34, 60, 80, 0.26);
  outline: transparent;
  color: black;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;

interface Length {
  length: number
}

export const AutocompleteContainer = styled.div<Length>`
  display: ${(props) => props.length < 3 ? 'none' : 'flex'};
  flex-direction: column;
  box-shadow: 0 5px 14px -2px rgba(34, 60, 80, 0.26);
  border-radius: 20px;
  margin-top: 10px;
  background-color: white;
  font-size: 25px;
  padding: ${(props) => props.length < 3 ? 0 : '10px' };
  color: black;
`;