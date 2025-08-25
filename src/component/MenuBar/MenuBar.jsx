import React, { useState } from "react";
import "./MenuBar.css";
import { FaGift, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <nav className="menu-bar">
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu links */}
      <ul className={`menu-links ${isOpen ? "active" : ""}`}>
        {/* Categories Dropdown */}
        <li className="dropdown">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            All Categories ▾
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>Meats & Sea Foods</li>
              <li>Breads & Bakery</li>

              <li className="sub-dropdown">
                <button onClick={() => toggleSubmenu("breakfast")}>
                  Breakfast & Dairy ▸
                </button>
                {activeSubmenu === "breakfast" && (
                  <ul className="sub-menu">
                    <li>Milk</li>
                    <li>Butter</li>
                    <li>Cheese</li>
                  </ul>
                )}
              </li>

              <li className="sub-dropdown">
                <button onClick={() => toggleSubmenu("fruits")}>
                  Fruits & Juice ▸
                </button>
                {activeSubmenu === "fruits" && (
                  <ul className="sub-menu">
                    <li>Apple Juice</li>
                    <li>Mango Juice</li>
                    <li>Fresh Fruits</li>
                  </ul>
                )}
              </li>

              <li>Fruits & Vegetables</li>
            </ul>
          )}
        </li>

        <li><Link to="/">Home</Link></li>
        <li><a href="#">Specials</a></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Brand</a></li>
      </ul>

      {/* Gift Button */}
      <button className="gift-btn">
        <FaGift className="gift-icon" /> Festival Gift Overs
      </button>
    </nav>
  );
};

export default MenuBar;
