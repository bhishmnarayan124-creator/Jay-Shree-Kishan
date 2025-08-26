import React from "react";
import "./Banner.css";
import { assets } from "../../assets/assets";


const Banner = () => {
  return (
    <>
  <div className="container">
  <div className="banner">
    <img src={assets.banner} alt="banner" />
    <div className="content">
      <div className="left">Super Discount For Your First Purchase.</div>
      <div className="center">
        <button>Free Offer</button>
      </div>
      <div className="right">Use discount code in check out !</div>
    </div>
  </div>
</div>




        
        {/* Cards */}
        <div className="cards-container">
          <div className="card">
            <div className="bg-imag">
              <img src={assets.banner1} alt=""/>
            </div>
            <div className="overlay"></div>
            <div className="content">
              <p className="subtitle">Weekend Discount 40 %</p>
              <h2 className="title">Everything Is So <br /> Fresh & Delicious</h2>
              <p className="text">Eat one every day</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>

          <div className="card">
            <div className="bg-ima">
              <img src={assets.banner2} alt=""/>
            </div>
            <div className="overlay"></div>
            <div className="content">
              <p className="subtitle">Weekend Discount 40 %</p>
              <h2 className="title">Everything Is So <br /> Fresh & Delicious</h2>
              <p className="text">Eat one every day</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>

          <div className="card">
            <div className="bg-image">
              <img src={assets.banner3} alt=""/>
            </div>
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
