import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
        <nav>
          <a href="/shop">Shop</a>
          <a href="/order">Order Review</a>
          <a href="/inventory">Manage Invertory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
