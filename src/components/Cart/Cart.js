import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1; //create quantity not from products.JSON
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = totalQuantity > 0 ? 15 : 0; //shorcut
  //   const shipping = 15; //shorcut
  const tax = (total + shipping) * 10;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <strong>Order Summery</strong>
      </p>
      <p style={{ textAlign: "center" }}>
        Items Order{" "}
        <span style={{ color: "brown", fontWeight: "bold" }}>
          {totalQuantity}
        </span>
      </p>

      <div className="calculation">
        <div>
          <p>Items :</p>
          <p>Shipping &#38; Handling :</p>
          <p>Tax :</p>
          <p>Total :</p>
        </div>

        <div>
          <p>{totalQuantity}</p>
          <p>${shipping}</p>
          <p>${tax.toFixed(2)}</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>

      <p style={{ textAlign: "center", color: "brown" }}>
        <strong>TOTAL : </strong>${grandTotal.toFixed(2)}
      </p>

      <div className="review-btn">
        <button>Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
