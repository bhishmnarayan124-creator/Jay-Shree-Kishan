import React, { useState } from "react";
import "./BuySellForm.css";

const BuySellForm = () => {
  const [formData, setFormData] = useState({
    type: "SELL",
    commodity: "",
    quantity: "",
    state: "",
    district: "",
    quality: "Good",
    availableFrom: "", 
    language: "English",
    comments: "",
    isOrganic: false,
    isProcessed: false,
    isGraded: false,
    isPacked: false,
    isStoredAC: false,
    image: null,
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h3>List Your Product For Sale</h3>
      <form onSubmit={handleSubmit}>
        {/* Buy / Sell */}
        <label>Do you want to Buy / Sell</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="SELL">SELL</option>
          <option value="BUY">BUY</option>
        </select>

        {/* Commodity */}
        <label>Commodity</label>
        <input
        className="commodity"
          type="text"
          name="commodity"
          placeholder="Ex: Tomato, Potato, Onions"
          value={formData.commodity}
          onChange={handleChange}
        />

        {/* Quantity */}
        <label>Available Quantity</label>
        <input
         className="commodity"
          type="text"
          name="quantity"
          placeholder="100 KG, 10 TON..."
          value={formData.quantity}
          onChange={handleChange}
        />

        {/* State & District */}
        <label>State</label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select Your State</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="MH">Maharashtra</option>
        </select>

        <label>District</label>
        <select name="district" value={formData.district} onChange={handleChange}>
          <option value="">Select Your District</option>
          <option value="Agra">Agra</option>
          <option value="Pune">Pune</option>
        </select>

        {/* Quality */} 
        <label>Quality</label>
        <select name="quality" value={formData.quality} onChange={handleChange}>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Best">Best</option>
        </select>

        {/* Date */}
        <label>Available From</label>
        <input
        className="commodity"
          type="date"
          name="availableFrom"
          value={formData.availableFrom}
          onChange={handleChange}
        />

        {/* Language */}
        <label>Language Preference</label>
        <select name="language" value={formData.language} onChange={handleChange}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>

        {/* Comments */}
        <label>Comments</label>
        <textarea
          name="comments"
          placeholder="I want to sell my product."
          value={formData.comments}
          onChange={handleChange}
        ></textarea>

        {/* Checkboxes */}
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="isOrganic"
              checked={formData.isOrganic}
              onChange={handleChange}
            />
            Is It Organic Product?
          </label>
          <label>
            <input
              type="checkbox"
              name="isProcessed"
              checked={formData.isProcessed}
              onChange={handleChange}
            />
            Is Product Processed?
          </label>
          <label>
            <input
            className="commodity"
              type="checkbox"
              name="isGraded"
              checked={formData.isGraded}
              onChange={handleChange}
            />
            Is Product Graded?
          </label>
          <label>
            <input
            className="commodity"
              type="checkbox"
              name="isPacked"
              checked={formData.isPacked}
              onChange={handleChange}
            />
            Is Product Packed in Bags?
          </label>
          <label>
            <input
            className="commodity"
              type="checkbox"
              name="isStoredAC"
              checked={formData.isStoredAC}
              onChange={handleChange}
            />
            Is Product Stored in A.C?
          </label>
        </div>

        {/* File Upload */}
        <label>Images</label>
        <input type="file" name="image" onChange={handleChange} />

        {/* Contact Details */}
        <h4 className="Your">Your Contact Details</h4>
        <input
        
          type="text"
          name="name"
          className="name"
          placeholder="Please Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="name"
          placeholder="Please Enter Your Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Terms */}
        <label className="terms">
           I am agree with Terms And Conditions <input type="checkbox" required />
           
        </label>
         
        {/* Submit */}
        <button className="Submit_1" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuySellForm;
