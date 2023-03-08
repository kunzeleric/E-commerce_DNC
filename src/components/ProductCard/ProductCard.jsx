import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({data}) => {
  return (
    <div className="home__card">
      <img src={data.imgPath} alt="Modelo" />
      <div className="home__card-section">
        <p>{data.title}</p>
        <button>
          <Link to={`/products/${data.id}`}>Comprar Look</Link>
        </button>
      </div>
    </div>
  )
};

export default ProductCard;
