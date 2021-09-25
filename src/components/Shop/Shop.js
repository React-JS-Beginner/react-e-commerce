import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); //Cart-Point
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleSearch = (event) => {
    // console.log(event.target.value);
    const searchText = event.target.value;
    const mathedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(mathedProducts);
    // console.log(mathedProducts.length);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleSearch}
        />
      </div>

      <div className="shop-container">
        <div className="all-products">
          {/* {products.map((product) => ( */}
          {displayProducts.map(
            (
              product //Check Here Carefully
            ) => (
              <Product
                key={product.key}
                product={product}
                handleAddToCart={handleAddToCart} //Cart-Point
              ></Product>
            )
          )}
        </div>

        <div className="cart">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
