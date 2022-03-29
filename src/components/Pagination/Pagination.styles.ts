import styled from "styled-components";

export const PaginationStyled = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const PageButtonStyled = styled.span`
  background-color: #704cb6;
  color: white;
  height: 34px;
  width: 34px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  line-height: 34px;
  margin: 3px;
  &:hover {
    background-color: #482787;
    cursor: pointer;
  }
`;
