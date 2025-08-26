import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="contact-container">
     
      <div className="contact">
        <span>🏠</span> | Contact Us
      </div>

      {/* Title */}
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-grid">
        {/* Left Section */}
        <div className="location">
          <h2>Our Location</h2>
          <p>🏠 Address 1</p>
          <p>📞 123456789</p>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span className="required">*</span> Your Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span className="required">*</span> E-Mail Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span className="required">*</span> Enquiry
              <textarea
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <div className="button-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;