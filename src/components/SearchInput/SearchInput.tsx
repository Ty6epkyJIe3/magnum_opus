import React, { FC, useEffect, useState } from "react";
import {
  SearchInputStyled,
  SearchContainer,
  AutocompleteContainer,
} from "./SearchInput.styles";
import { moviesAPI } from "../../services/MoviesService";
import { Link } from "react-router-dom";

export const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const { data } = moviesAPI.useFetchMoviesWithKeywordsQuery(keyword.trim(), {
    skip: keyword.length < 3,
  });
  const handleSubmitOnClick = () => {
    setKeyword("");
  };
  return (
    <SearchContainer>
      <SearchInputStyled
        placeholder={"Search..."}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {data && data.results.length >= 1 && (
        <AutocompleteContainer length={keyword.length}>
          {data.results.slice(0, 5).map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <div key={movie.id} onClick={handleSubmitOnClick}>
                {movie.title}
              </div>
            </Link>
          ))}
        </AutocompleteContainer>
      )}
    </SearchContainer>
  );
};
