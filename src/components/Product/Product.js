import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name, seller, img, price, stock} = props.product

    return (
        <div className="single-product">
            <div className="display-product">
                <img src={img} alt="" />
            </div>

            <div className="product-details">
                <p style={{color:'blue'}}>{name}</p>
                <p>By: <strong>{seller}</strong></p>
                <p>${price}</p>
                <p style={{fontSize:'14px'}}>
                    Only <span style={{color:'brown',fontWeight:'bold'}}>{stock}</span> left in stock - order soon
                    </p>
                <button>add to cart</button>
            </div>

        </div>
    );
};

export default Product;