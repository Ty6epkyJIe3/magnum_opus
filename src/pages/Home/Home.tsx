import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { H1Styled } from "./Home.styles";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <Header />
      <H1Styled>discover</H1Styled>
      <H1Styled>the movies</H1Styled>
    </>
  );
};
