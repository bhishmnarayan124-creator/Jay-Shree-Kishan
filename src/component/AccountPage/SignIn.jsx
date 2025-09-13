import React, { useState, useContext } from "react";
import { generateOtp, signInWithOtp, signInWithUsername } from "../../api";
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../component/UserContext"; // Context import करें

const SignIn = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext); // Context से login function लें
  const navigate = useNavigate();

  // OTP Send
  const handleGenerateOtp = async () => {
    if (!mobile) return alert("Enter your mobile number!");
    try {
      const res = await generateOtp({ mobile });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error sending OTP");
    }
  };

  // OTP Login
  const handleOtpLogin = async () => {
    if (!otp) return alert("Enter OTP!");
    try {
      const res = await signInWithOtp({ mobile, otp });
      alert(res.data.message);

      // ✅ Context login
      login(mobile, res.data.token); // यहाँ mobile username की तरह store कर रहे हैं
      navigate("/"); // Homepage redirect
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // Username + Password Login
  const handlePasswordLogin = async () => {
    if (!username || !password) return alert("Enter username and password!");
    try {
      const res = await signInWithUsername({ username, password });
      alert(res.data.message);

      // ✅ Context login
      login(username, res.data.token);
      navigate("/"); // Homepage redirect
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-box">
      <h2 className="auth-title">Sign In</h2>

      <div className="login-section">
        <h3>Login with OTP</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="auth-input"
          />
          <button className="auth-button" onClick={handleGenerateOtp}>
            Send OTP
          </button>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="auth-input"
          />
          <button className="auth-button" onClick={handleOtpLogin}>
            Login
          </button>
        </div>
      </div>

      <hr className="divider" />

      <div className="login-section">
        <h3>OR</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>
        <button className="auth-button" onClick={handlePasswordLogin}>
          Login
        </button>

        <Link to='/signUp'>
          <h5 className="Sign-5">
            Don't have an account? <span className="span-tag"> Sign up</span>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
