import React, { useEffect, useState } from "react";
import "./Special.css";
import {
  FaThLarge,
  FaList,
  FaShoppingCart,
  FaHeart,
  FaBalanceScale,
  FaEye,
} from "react-icons/fa";

const Special = () => {
  const [view, setView] = useState("grid"); // grid or list
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products?special=true") // ✅ backend se special offers
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, []);

  return (
    <div className="special-offers">
      <h2 className="title">Special Offers</h2>

      {/* Header Controls */}
      <div className="offers-header">
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

        <div className="options">
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
      <div className={`offers-list ${view}`}>
        {products.length === 0 ? (
          <p>No special offers available</p>
        ) : (
          products.map((p) => (
            <div key={p._id} className="offer-card">
              {/* Discount Badge */}
              {p.discount && <span className="discount">{p.discount}%</span>}

              {/* Product Image */}
              <img
                src={`http://localhost:5000/uploads/${p.image}`}
                alt={p.commodity}
                className="product-img"
              />

              {/* Product Info */}
              <div className="offer-info">
                <h3>{p.commodity}</h3>
                <p className="desc">
                  {p.description || "No description available"}
                </p>

                <div className="price-section">
                  <span className="new-price">₹{p.price}</span>
                  {p.oldPrice && (
                    <span className="old-price">₹{p.oldPrice}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="actions">
                  <button>
                    <FaShoppingCart />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <FaBalanceScale />
                  </button>
                  <button>
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Special;
