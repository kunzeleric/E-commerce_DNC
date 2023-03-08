import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./index.scss";

const Home = ({ data }) => {
  return (
    <div className="home">
      <HeaderMenu />
      <SearchBar />

      <div className="home__products">
        {data.map((product) => (
          <ProductCard data={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
