import React from "react";
import "./TrendingPrices.css";
import Features from "../category/Category";

const TrendingPrices = () => {
  return (
    <>
    <Features/>
    <div className="pricing-container">
      <h2 className="title">Trade Smarter with Premium Mandi Data</h2>
      <p className="subtitle">
        Stop guessing and start profiting. Our premium plans give you the tools to make data-driven decisions. 
        Set real-time price alerts, analyze historical trends, and export data for your own analysis. 
        This is how smart traders stay ahead of the market.
      </p>

      <div className="pricing-grid">
        {/* 3 Months Plan */}
        <div className="plan-card highlight">
          <div className="tag">Popular</div>
          <h3>3 Months Package</h3>
          <h2 className="price">₹299</h2>
          <ul>
            <li>✔ Real-time Price Alerts – Get instant notifications for your desired crops.</li>
            <li>✔ Advanced Trend Analysis – View historical Mandi prices to predict future movements.</li>
            <li>✔ Data Export – Download Mandi data for your own deep analysis.</li>
          </ul>
          <button className="bton">Buy 3-Month Plan</button>
        </div>

        {/* 6 Months Plan */}
        <div className="plan-card">
          <h3>6 Months Package</h3>
          <h2 className="price">₹499</h2>
          <ul>
            <li>✔ Continuous Insights – Stay informed across multiple harvesting seasons.</li>
            <li>✔ Strategic Planning – Use long-term data for better crop and market decisions.</li>
            <li>✔ All features of the 3-Month Plan.</li>
          </ul>
          <button className="bton">Buy 6-Month Plan</button>
        </div>

        {/* 1 Year Plan */}
        <div className="plan-card highlight">
          <div className="tag">Best Value</div>
          <h3>1 Year Package</h3>
          <h2 className="price">₹799</h2>
          <ul>
            <li>✔ Year-Round Dominance – Be the most informed trader in your region.</li>
            <li>✔ Maximum Savings – Lock in your rate and save up to 40%.</li>
            <li>✔ Uninterrupted insights for a full year!</li>
          </ul>
          <button className="bton">Buy 1-Year Plan</button>
        </div>

        {/* 1 Month Plan */}
        <div className="plan-card highlight">
          <div className="tag">Starter Plan</div>
          <h3>1 Month Plan</h3>
          <h2 className="price">₹199</h2>
          <ul>
            <li>✔ Experience the Power – Test all premium features for one month.</li>
            <li>✔ See the Difference – Understand how data can transform your trading.</li>
            <li>✔ No Long-Term Commitment!</li>
          </ul>
          <button className="bton">Subscribe to the 1-Month Plan</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrendingPrices;
