import React, { useState } from "react";
import "./MenuBar.css";
import { FaGift, FaBars, FaTimes } from "react-icons/fa";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu-bar">
     
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      
      <ul className={`menu-links ${isOpen ? "active" : ""}`}>
        <li><a href="#">All Categories ▾</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Specials</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Brand</a></li>
         <li><a href="#">contant</a></li>
      </ul>

    
      <button className="gift-btn">
        <FaGift className="gift-icon" /> Festival Gift Overs
      </button>
    </nav>
  );
};

export default MenuBar;
