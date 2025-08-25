import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="container">
        {/* Banner */}
        <div className="banner">
          <div className="left">Super Discount For Your First Purchase.</div>
          <div className="center">
            <button>Free Offer</button>
          </div>
          <div className="right">Use discount code in check out !</div>
        </div>
        </div>


        
        {/* Cards */}
        <div className="cards-container">
          <div className="card">
            <div className="bg-imag"></div>
            <div className="overlay"></div>
            <div className="content">
              <p className="subtitle">Weekend Discount 40 %</p>
              <h2 className="title">Everything Is So <br /> Fresh & Delicious</h2>
              <p className="text">Eat one every day</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>

          <div className="card">
            <div className="bg-ima"></div>
            <div className="overlay"></div>
            <div className="content">
              <p className="subtitle">Weekend Discount 40 %</p>
              <h2 className="title">Everything Is So <br /> Fresh & Delicious</h2>
              <p className="text">Eat one every day</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>

          <div className="card">
            <div className="bg-image"></div>
            <div className="overlay"></div>
            <div className="content">
              <p className="subtitle">Weekend Discount 40 %</p>
              <h2 className="title">Everything Is So <br /> Fresh & Delicious</h2>
              <p className="text">Eat one every day</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Banner;
