import React from "react";
import searchLogo from "../../assets/search-icon.png";
import heartLogo from "../../assets/heart-icon.png";
import userIcon from "../../assets/person-icon.png";
import "./index.scss";

const SearchBar = () => {
  return (
  <section className="search">
    <div className="search__bar-container">
      <img className="search__bar-logo" src={searchLogo} alt="Icone de Busca" />
      <input type="text" placeholder="O que você está procurando?"/>
    </div>
    <img className="search__bar-user" src={heartLogo} alt="Icone Favoritos" />
    <img className="search__bar-like" src={userIcon} alt="Icone Usuario" />
  </section>);
};

export default SearchBar;
