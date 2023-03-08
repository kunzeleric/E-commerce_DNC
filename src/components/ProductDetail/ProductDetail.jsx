import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ProductDetail = ({ data }) => {
  return (
    <div className="product-detail">
      <div className="product-detail__left">
        <div className="product-detail__card">
            <img src={data.imgPathDetail} alt={data.title} />
            <p>{data.title}</p>
        </div>
        <div className="product-detail__description">
            <h2>Descrição</h2>
            <p>{data.title}</p>
        </div>
      </div>
      <div className="product-detail__right">
        <h1>Informações Sobre o Produto</h1>
        <h2>{data.price}</h2>
        <p>
            Cor: {" "}
            {data.colors.length === 1 
            ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
            ))
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length 
                ? ( <span key={index}>{color}</span>)
                : <span key={index}>{color}, </span>
                )}
            </p>
            <div className="product-detail__cube-colors">
              {data.colors.map((color, index) => (
                <span 
                  style={{
                  padding: "0.7rem 0", backgroundColor: color, 
                  width: "60px", height:"60px" ,borderRadius:"8px",
                  border: "1px solid black"}} key={index}>
                  </span>
              ))}
            </div>

            <p>Tamanho:</p>
            <div className="product-detail__sizes">
              {data.sizes.map((size, index) => (
                <span
                  style={{
                  width: "60px", height: "60px", borderRadius:"8px", color: "black", 
                  fontSize: "2rem", border: "1px solid black", padding:"0.7rem 0",
                  textTransform:"uppercase", textAlign:"center"}} key={index}>
                  {size}
                </span>
              ))}
            </div>
            
            <button className="product-detail__pay-button">
              <Link to={`/payment/${data.id}`}>Finalizar Compra</Link>
            </button>
      </div>
    </div>
  );
};

export default ProductDetail;
