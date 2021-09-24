import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <p style={{textAlign:'center'}}><strong>Order Summery</strong></p>
            <p style={{textAlign:'center'}}>Items Order <span style={{color:'brown',fontWeight:'bold'}}>0</span></p>

            <div className="calculation">
            <div>
            <p>Items:</p>
            <p>Shipping &#38; Handling:</p>
            <p>Total before tax:</p>
            <p>Estimated Tax:</p>
            </div>

            <div>
                <p>$00.0</p>
                <p>$00.0</p>
                <p>$00.0</p>
                <p>$00.0</p>
            </div>
            </div>

            <p style={{textAlign:'center', color:'brown'}}><strong>TOTAL : </strong></p>

            <div className="review-btn">
            <button>Review Order</button>
            </div>

        </div>
    );
};

export default Cart;