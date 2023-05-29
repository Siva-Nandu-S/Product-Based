import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const id = useParams();
  const junk = "";

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  },[junk]);

  const getProduct = async () => {
    let data = await fetch(`http://localhost:3001/products/product/${id.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    setProduct(data);
  };

  let link = `http://localhost:3000/purchase/`;

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <h4>Price : {product.price}</h4>
      <h4>Remaining Stock : {product.stock}</h4>
      <a href={link + id.id} className="product-buy-button">Buy</a>
    </div>
  );
};

export default Product;
