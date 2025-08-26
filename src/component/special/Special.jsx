import React, { useState } from "react";
import "./Special.css";
import { FaHome } from "react-icons/fa";

function Special() {
  const [sortBy, setSortBy] = useState("default");
  const [show, setShow] = useState(25);

  return (
    <>
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <FaHome className="home-icon" />
        <span className="breadcrumb-text">Special Offers</span>
      </div>

      {/* Title */}
      <h2 className="titleoffer">Special Offers</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="compare">Product Compare (0)</div>

        <div className="options">
          <label>
            Sort By:{" "}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="priceLow">Price (Low &gt; High)</option>
              <option value="priceHigh">Price (High &gt; Low)</option>
              <option value="rating">Rating (Highest)</option>
              <option value="latest">Latest</option>
            </select>
          </label>

          <label>
            Show:{" "}
            <select value={show} onChange={(e) => setShow(e.target.value)}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Showing 1 to 7 of 7 (1 Pages)
      </div>
    </>
  );
}

export default Special;
