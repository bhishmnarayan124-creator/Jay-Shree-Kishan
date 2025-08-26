import React, { useState } from "react";
import "./ProductPage.css";
import { FaList, FaThLarge, FaShoppingCart, FaHeart, FaBalanceScale } from "react-icons/fa";
import { assets } from "../../assets/assets";

const ProductPage = () => {
  const [view, setView] = useState("grid"); // grid or list
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    color: [],
  });

  // Dummy products
  const products = [
    {
      id: 1,
      name: "Organic Cold Pressed Sunflower Cooking Oil",
      price: 122,
      image: assets.product,
      sizes: ["1kg", "2kg", "3kg"],
      color: "red",
      rating: 4,
    },
  ];

  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      const alreadySelected = prev[type].includes(value);
      return {
        ...prev,
        [type]: alreadySelected
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  return (
    <div className="product-page">
        
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="sidebar-title">CATEGORY</h3>
        <ul className="category-list">
          <li className="active">Meats & Sea Foods (9)</li>
          <li>Breads & Bakery (4)</li>
          <li>Breakfast & Dairy (7)</li>
          <li>Fruits & Juice (9)</li>
          <li>Grocery & Staples (0)</li>
          <li>Fruits & Vegetables (4)</li>
        </ul>

        <h3 className="sidebar-title">REFINE SEARCH</h3>
        <div className="filter-group">
          <p>Size</p>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleFilter("size", "Small")}
              checked={selectedFilters.size.includes("Small")}
            />{" "}
            Small (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleFilter("size", "Medium")}
              checked={selectedFilters.size.includes("Medium")}
            />{" "}
            Medium (1)
          </label>
        </div>

        <div className="filter-group">
          <p>Color</p>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleFilter("color", "blue")}
              checked={selectedFilters.color.includes("blue")}
            />{" "}
            blue (0)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleFilter("color", "red")}
              checked={selectedFilters.color.includes("red")}
            />{" "}
            red (1)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleFilter("color", "yellow")}
              checked={selectedFilters.color.includes("yellow")}
            />{" "}
            yellow (0)
          </label>
        </div>

        <button className="refine-btn">Refine Search</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="product-header">
          <div className="view-toggle">
            <FaThLarge
              className={`icon ${view === "grid" ? "active" : ""}`}
              onClick={() => setView("grid")}
            />
            <FaList
              className={`icon ${view === "list" ? "active" : ""}`}
              onClick={() => setView("list")}
            />
          </div>

          <div className="product-options">
            <select>
              <option>Sort By: Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <select>
              <option>Show: 15</option>
              <option>30</option>
              <option>50</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className={`product-list ${view}`}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="price">${product.price.toFixed(2)}</p>
                <div className="sizes">
                  {product.sizes.map((size) => (
                    <button key={size} className="size-btn">{size}</button>
                  ))}
                </div>
                <div className="product-actions">
                  <button><FaShoppingCart /></button>
                  <button><FaHeart /></button>
                  <button><FaBalanceScale /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
