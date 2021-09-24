import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); //Cart-Point

  useEffect(() => {
    fetch('./products.JSON')
    // fetch('../../../public/products.JSON')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
}

  return (
    <div className="shop-container">

      <div className="all-products">
        {
          products.map(product => <Product
          key={product.key}
          product={product}
          handleAddToCart={handleAddToCart} //Cart-Point
          ></Product>)
        }
      </div>

      <div className="cart">
        <Cart cart={cart} ></Cart>
      </div>

    </div>
  );
};

export default Shop;
