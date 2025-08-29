import React from "react";
import "./Categories.css";
import Features from "../category/Category";
import Search from "../Searchbar/Search";

const categories = [
  "Apple","Banana","Grapes","Lemon","Mango","Orange","Pomegranate","Papaya","Watermelon","Pear","Pineapple","Guava","Plum",
  "Avocado","Dragon Fruit","Mangosteen","Jackfruit","Mosambi","Rambutan","Muskmelon","Bajra","Basmati Rice","Jowar","Maize","Paddy",
  "Ragi","Rice","Wheat","Atta","Barley","Millet","Rava","Almond","Cashew","Wal nut","Dry Grapes","Pista","Desiccated Coconut",
  "Apricot","Fig","Castor Seed","Coconut","Coconut Oil","Copra","Groundnut Oil","Mentha Oil","Mustard","Mustard Oil","Palm Oil","Sesame",
  "Soyabean","Sunflower Oil","Sunflower Seed","Groundnut","Cotton","Sesame Oil","Neem Seed","Soya DOC","Cotton Seed Oil",
  "Cotton Seed DOC","Tender Coconut","Groundnut DOC","Castor Oil","Tea","Coffee","Coffee Powder","Other","Honey","Ghee","Jute",
  "Rubber","Marigold","Egg","Dhaincha","Chana","Chana Dal","Masoor","Masoor Dal","Moong","Moong Dal","Tur","Tur Dal","Urad",
  "Urad Dal","Green Peas","Rajma","Horse Gram","White Peas","Arecanut","Amla","Cardamom","Dry Chilli","Cinamon","Cloves","Coriander",
  "Dried Ginger","Ginger","Nutmeg","Pepper","Tamarind","Turmeric","Jeera","Fennel Seeds","Fenugreek","Pepper Powder","White Pepper",
  "Green Chilli","Makhana","Star Anise","Fenugreek Leaves","Flax Seed","Mahua","Mace","Gur","Sugar","Sugarcane","Tomato","Cabbage",
  "Small Onion","Potato","Drumstick","Onion","Garlic","Beetroot","Cauliflower","Cucumber","Corriander Leaves","Capsicum","Broad Beans",
  "Ladys Finger","Brinjal","Mushroom","Pumpkin","Carrot","Cluster Beans","Sweet Potato","Radish","Tapioca","Bitter gourd"
];

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
