import React from "react";
import { HeaderStyled } from "./Header.styles";
import { SearchInput } from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";
import { HeartSvg, HomeSvg, MenuSvg } from "../../assets/svg";
import { genres } from "../../utils/genres";
import { NavigationBlock } from "../NavigationBlock/NavigationBlock";
import { navigation } from "../../utils/navigation";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <div className="container">
          <MenuSvg />
          <div className="dropdown__content">
            <NavigationBlock data={navigation} />
            <NavigationBlock data={genres} />
          </div>
        </div>
        <Link to={"/"}>
          <div className="container">
            <HomeSvg />
          </div>
        </Link>
      </div>
      <SearchInput />
      <Link to={"/Favorites"}>
        <div className="container">
          <HeartSvg />
        </div>
      </Link>
    </HeaderStyled>
  );
};
