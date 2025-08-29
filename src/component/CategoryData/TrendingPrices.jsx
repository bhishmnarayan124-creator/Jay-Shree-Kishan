import React from "react";
import "./TrendingPrices.css";
import Features from "../category/Category";

const plans = [
  {
    title: "3 Months Package",
    price: "₹299",
    features: [
      "“Real-time Price Alerts” – Get instant notifications for your desired crops.",
      "“Advanced Trend Analysis” – View historical Mandi prices to predict future movements.",
      "“Data Export” – Download Mandi data for your own deep analysis."
    ],
    button: "Buy 3-Month Plan",
    tag: "Popular"
  },
  {
    title: "6 Months Package",
    price: "₹499",
    features: [
      "“Continuous Insights” – Stay informed across multiple harvesting seasons.",
      "“Strategic Planning” – Use long-term data for better crop and market decisions.",
      "All features of the 3-Month Plan."
    ],
    button: "Buy 6-Month Plan"
  },
  {
    title: "1 Year Package",
    price: "₹799",
    features: [
      "“Year-Round Dominance” – Be the most informed trader in your region.",
      "“Maximum Savings” – Lock in your rate and save up to 40%.",
      "Uninterrupted insights for a full year!"
    ],
    button: "Buy 1-Year Plan",
    tag: "Best Value"
  },
  {
    title: "1 Month Plan",
    price: "₹199",
    features: [
      "“Experience the Power” – Test all premium features for one month.",
      "“See the Difference” – Understand how data can transform your trading.",
      "“No Long-Term Commitment!”"
    ],
    button: "Subscribe to the 1-Month Plan",
    tag: "Starter Plan"
  }
];

const TrendingPrices = () => {
  return (
    <>
    <Features/>
    <div className="pricing-container">
      <h2>Trade Smarter with Premium Mandi Data</h2>
      <p className="subtitle">
        Stop guessing and start profiting. Our premium plans give you the tools to make data-driven decisions. 
        Set real-time price alerts, analyze historical trends, and export data for your own analysis. 
        This is how smart traders stay ahead of the market.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.tag ? "highlight" : ""}`}>
            {plan.tag && <div className="tag">{plan.tag}</div>}
            <h3>{plan.title}</h3>
            <h2 className="price">{plan.price}</h2>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="bton">{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TrendingPrices;
