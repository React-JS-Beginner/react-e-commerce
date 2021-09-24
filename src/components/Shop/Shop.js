import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.JSON')
    // fetch('../../../public/products.JSON')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  return (
    <div className="shop-container">

      <div className="all-products">
        {
          products.map(product => <Product
          key={product.key}
          product={product}
          ></Product>)
        }
      </div>

      <div className="cart">
        <Cart></Cart>
      </div>

    </div>
  );
};

export default Shop;
