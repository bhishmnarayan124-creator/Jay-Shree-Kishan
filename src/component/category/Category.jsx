import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaUsers, FaHandshake, FaBell, FaMobileAlt } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";
import { GiEggClutch } from "react-icons/gi";
import "./Category.css";
import { Link } from "react-router-dom";

const Features = () => {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null); 
  const [height, setHeight] = useState("0");

  const features = [
    { icon: <FaPlus />, title: "Buy / Sell" },
    { icon: <FiTrendingUp />, title: "View Mandi Prices" },
    { icon: <FaUsers />, title: "View Buyers" },
    { icon: <FaHandshake />, title: "View Sellers" },
    { icon: <GiEggClutch />, title: "Egg Prices" },
    { icon: <Link to='/trendingPrices'><HiOutlineChartBar /></Link>, title: "Explore Mandi Price Trends", premium: true },
    { icon: <FaBell />, title: "Alerts for Daily Price Changes", premium: true },
    { icon: <FaMobileAlt />, title: "Download KisanDeals Mobile App" },
  ];

  
  useEffect(() => {
    if (showMore) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [showMore]);

  return (
    <div className="container">
      <div className="features-section">
        <h2>Explore Our Features</h2>

       
    <div className="features-grid">
          {features.slice(0, 4).map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                {f.icon}
                {f.premium && <span className="crown">★</span>}
              </div>
              <p>{f.title}</p>
            </div>
          ))}
        </div>

        
        <div
          className="slide-wrapper"
          style={{ maxHeight: height }}
          ref={contentRef}
        >
          <div className="m-features-grid">
            {features.slice(4).map((f, i) => (
              <div key={i} className="m-feature-card">
                <div className="feature-icon">
                  {f.icon}
                  <Link to='/trendingPrices'> {f.premium && <span className="crown">★</span>}</Link> 
                </div>
                <p>{f.title}</p>
              </div>
            ))}
          </div>
        </div>

      
        <p 
          className="toggle-text" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less Features ▲" : "See More Features ▼"}
        </p>
      </div>
    </div>
  );
};

export default Features;
