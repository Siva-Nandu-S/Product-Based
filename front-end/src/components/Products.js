import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const junk = "";

  useEffect(() => {
    getProducts();
  },[junk]);

  const getProducts = async () => {
    let data = await fetch("http://localhost:3001/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    data = await data.json();
    setProducts(data);
  };

  let link = `http://localhost:3000/products/product/`;

  return (
    <div className="products">
      <h1 className="products-h1">Products</h1>
      <ul className="products-list">
        <div>
          {products.map(({ _id, name}) => {
            return (
              <div className="container">
                <li key={_id} className="product">
                  <h4 className="product-item">{name}</h4>
                  <a href={link + _id} className="product-details-button">Details</a>
                </li>
              </div>
            );
          })}
        </div>
      </ul>
      <a href="/add-product" className="add-products-link">Add A Product ?</a>
    </div>
  );
};

export default Products;
