import React from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop-container">

      <div className="all-products">
            <Product></Product>
      </div>

      <div className="cart">
            <Cart></Cart>
      </div>

    </div>
  );
};

export default Shop;
