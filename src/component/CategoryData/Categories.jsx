import React from "react";
import "./Categories.css";
import Features from "../category/Category";
import Search from "../Searchbar/Search";
import { categories } from "../../assets/assets";



const CategoryPage = () => {
  return (
    <>
    <Features/>
    <Search/>
    <div className="category-container">
      {categories.map((item, index) => (
        <button key={index} className="category-btn">
          {item}
        </button>
      ))}
    </div>
    </>
  );
};

export default CategoryPage;
