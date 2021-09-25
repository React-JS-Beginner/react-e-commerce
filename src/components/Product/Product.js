import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { name, seller, img, price, stock, star, features, description} = props.product;

  const element = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="single-product">
      <div className="display-product">
        <img src={img} alt="" />
      </div>

      <div className="product-details">

      <div className="title">
      <p>{name}</p>
      </div>

       <div className="main-details">
       <div className="details">
          <p>
            By: <strong>{seller}</strong>
          </p>
          <p>${price}</p>
          <p style={{ fontSize: "14px" }}>
            Only{" "}
            <span style={{ color: "brown", fontWeight: "bold" }}>{stock}</span>{" "}
            left in stock - order soon
          </p>
          <button onClick={() => props.handleAddToCart(props.product)}>
            {" "}
            {element} &nbsp; add to cart
          </button>
        </div>

        <div className="ratings-features">

          <div className="rating">
          <Rating
            initialRating={star}
            emptySymbol="far fa-star stars"
            fullSymbol="fas fa-star stars"
            readonly
          ></Rating>
          </div>

            <div className="features">
                <p><strong>Features</strong></p>
                <ul>
                <li>Lorem Ipsum Anturo</li>
                <li>Lorem Ipsum Anturo</li>
                <li>Lorem Ipsum Anturo</li>
                <li>Lorem Ipsum Anturo</li>
                
                </ul>
            </div>

        </div>
       </div>

      </div>

      
    </div>
  );
};

export default Product;
