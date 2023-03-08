import React from "react";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import "./index.scss";

const Products = ({data}) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className="product">
      <HeaderMenu/>
      <SearchBar />
      <ProductDetail data={selectedProduct}/>
    </section>
  );
};

export default Products;
