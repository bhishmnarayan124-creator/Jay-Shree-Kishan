import React from "react";
import { FaPlus, FaUsers, FaHandshake, FaBell, FaMobileAlt } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";
import { GiEggClutch } from "react-icons/gi";
import "./Category.css";

const Features = () => {
  const features = [
    { icon: <FaPlus />, title: "Buy / Sell" },
    { icon: <FiTrendingUp />, title: "View Mandi Prices" },
    { icon: <FaUsers />, title: "View Buyers" },
    { icon: <FaHandshake />, title: "View Sellers" },
    { icon: <GiEggClutch />, title: "Egg Prices" },
    { icon: <HiOutlineChartBar />, title: "Explore Mandi Price Trends", premium: true },
    { icon: <FaBell />, title: "Alerts for Daily Price Changes", premium: true },
    { icon: <FaMobileAlt />, title: "Download KisanDeals Mobile App" },
  ];

  return (
    <div className="container">
    <div className="features-section">
      <h2>Explore Our Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">
              {f.icon}
              {f.premium && <span className="crown">★</span>}
            </div>
            <p>{f.title}</p>
          </div>
        ))}
      </div>
      <p className="toggle-text">See Less Features ▲</p>
    </div>
    </div>
  );
};

export default Features;
