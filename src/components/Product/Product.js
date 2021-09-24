import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name, seller, img, price, stock} = props.product

    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-details">
                <p style={{color:'blue'}}>Name: {name}</p>
                <p>By: <strong>{seller}</strong></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button>add to cart</button>
            </div>

        </div>
    );
};

export default Product;