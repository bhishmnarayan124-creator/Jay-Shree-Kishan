// Navbar.jsx
import React from "react";
import "./Navber.css";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
    
      <div className="navbar-left">
        <h2 className="logo">
         <Link to='/'><span className="logo-green">Jay</span> Shree Kisan<span className="dot">.</span></Link> 
        </h2>

      </div>

     
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      
      <div className="navbar-right">
        <div className="icon-box">
          <FaHeart className="icon" />
          <span className="count">0</span>
        </div>
        <div className="account">
          <FaUser className="icon" />
          <span>
            Sign In <br />
            <span className="highlight">Account</span>
          </span>
        </div>
        <div className="icon-box">
          <FaShoppingCart className="icon" />
          <span className="count">0</span>
          <span className="cart-text">
            My Cart <br />
            <span className="highlight">$0.00</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
