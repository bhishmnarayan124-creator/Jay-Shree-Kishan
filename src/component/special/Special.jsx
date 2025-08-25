import React from 'react'
import React, { useState } from "react";
import "./Special.css";


function Special() {
    const [sortBy, setSortBy] = useState("default");
    const [show, setShow] = useState(25);

  return (
    <>
     <div className="special-offers">
      <h2 className="title">Special Offers</h2>

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
    </div>
    </>
  )
}

export default Special