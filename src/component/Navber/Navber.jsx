import React, { useState, useContext } from "react";
import "./Navber.css";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../component/UserContext";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const { user, logout } = useContext(UserContext);

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("कृपया खोजने के लिए कुछ टाइप करें।");
      return;
    }
    console.log("Searching for:", query);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2 className="logo">
          <Link to="/">
            <span className="logo-green">Jay</span> Shree Kisan
            <span className="dot">.</span>
          </Link>
        </h2>
      </div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="navbar-right">
        <div className="icon-box">
          <FaHeart className="icon" />
          <span className="count">0</span>
        </div>

        <div className="account">
          <FaUser className="icon" />
          <span>
            {user ? (
              <>
                <Link to="/profile">{user.username} <br /><span className="highlight">Account</span></Link>
                <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>
              </>
            ) : (
              <Link to="/signIn">
                Sign In <br />
                <span className="highlight">Account</span>
              </Link>
            )}
          </span>
        </div>

        <div className="icon-box">
          <FaShoppingCart className="icon" />
          <span className="count">0</span>
          <span className="cart-text">
            My Cart <br />
            <span className="highlight">$0.00</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
