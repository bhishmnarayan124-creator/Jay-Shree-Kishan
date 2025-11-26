import React, { useEffect, useState } from "react";
import "./ProductList.css";
import {
  FaPhoneAlt,
  FaCommentDots,
  FaEye,
  FaShareAlt,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [activeTab, setActiveTab] = useState("buyers"); // buyers | sellers
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // 👉 Assume user plan status (yeh aapko backend/auth se lena hoga)
  const [hasPlan, setHasPlan] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // fetch products based on active tab
  useEffect(() => {
    let url = `http://localhost:5000/api/products?type=${activeTab}`;
    if (selectedCategory) {
      url += `&category=${selectedCategory}`; // backend filter
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, [activeTab, selectedCategory]);

  // 👉 Call button handler
  const handleCallClick = (phoneNumber) => {
    if (hasPlan) {
      // Plan active → direct call
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Plan not active → redirect to plan purchase page
      navigate("/trendingPrices");
    }
  };

  return (
    <div className="product-list">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "buyers" ? "tab active" : "tab"}
          onClick={() => setActiveTab("buyers")}
        >
          Buyers
        </button>
        <button
          className={activeTab === "sellers" ? "tab active" : "tab"}
          onClick={() => setActiveTab("sellers")}
        >
          Sellers
        </button>
      </div>

      <h2>
        {activeTab === "buyers" ? "Buyer Requirements" : "Seller Listings"}{" "}
        {selectedCategory && `for ${selectedCategory}`}
      </h2>

      {products.length === 0 ? (
        <p>No {activeTab} available</p>
      ) : (
        <div className="cards">
          {products.map((p) => (
            <div key={p._id} className="product-card">
              <span className="tag">
                {activeTab === "buyers" ? "Requirement" : "Promoted"}
              </span>

              {/* Product Image */}
              {p.image && (
                <img
                  src={`http://localhost:5000/uploads/${p.image}`}
                  alt={p.commodity}
                  className="product-img"
                />
              )}

              <Link to={`/products/${p._id}`}>
                <h3>
                  {p.commodity}{" "}
                  {activeTab === "buyers" ? "Required in" : "Available at"}{" "}
                  {p.district}
                </h3>
              </Link>

              <p>
                Price: <b>INR {p.price}</b>
              </p>
              <p>
                Quantity: <b>{p.quantity}</b>
              </p>
              <p>
                type: <b>{p.type}</b>
              </p>
              <p>
                Category: <b>{p.commodity}</b>
              </p>
              <p>
                Posted On: <b>5 hours ago</b>
              </p>

              <div className="user-info">
                <FaUserCircle className="icon" />
                <span className="name">{p.name}</span>
              </div>

              <div className="location">
                <FaMapMarkerAlt className="icon" />
                <span>
                  {p.district}, {p.state}
                </span>
              </div>

              <div className="actions">
                <button
                  className="call-btn"
                  onClick={() => handleCallClick(p.phone || "9999999999")}
                >
                  <FaPhoneAlt /> CALL
                </button>

                <div className="meta">
                  <span>
                    <FaCommentDots /> 1 Comments
                  </span>
                  <span>
                    <FaEye /> 707 Views
                  </span>
                </div>
                <FaShareAlt className="share" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
