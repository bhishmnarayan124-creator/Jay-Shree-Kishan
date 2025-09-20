import React from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css"; // CSS file import


const Payment = () => {
  const location = useLocation();
  const { plan } = location.state || {}; // plan data from TrendingPrices or Signup

  const amount = plan ? plan.price.replace("₹", "") : "0";
  const currency = "INR";

 
  const handleRazorpay = async () => {
    if (!plan) {
      alert("No plan selected!");
      return;
    }

    try {
      debugger
      const res = await fetch("http://localhost:5000/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });

      const order = await res.json();

      const razorpayKey = 'rzp_live_RIxLixB8S7oATi';
    
      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: "Premium Mandi Plan",
        description: plan.name,
        order_id: order.id,
        handler: async function (response) {
            console.log(response);
          alert(" Payment Successful!");
          const verifyRes = await fetch("http://localhost:5000/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            alert(" Payment Successful!");
          } else {
            alert(" Payment Failed!");
          }
        },
        prefill: {
          name: "Dipanshu Sharma", 
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#4f46e5" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2 className="payment-title">Secure Checkout</h2>
        <p className="payment-subtitle">
          Complete your payment to activate your premium plan
        </p>

      
        <div className="order-summary">
          <div className="summary-row">
            <span>Plan</span>
            <span>{plan ? plan.name : "N/A"}</span>
          </div>
          <div className="summary-row">
            <span>Currency</span>
            <span>{currency}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{amount}</span>
          </div>
        </div>

       
        <button className="pay-button" onClick={handleRazorpay}>
          Pay with Razorpay
        </button>

     
        <p className="payment-footer">
          🔒 Secure payment powered by Razorpay. Your details are safe.
          
        </p>
      </div>
    </div>
  );
};

export default Payment;
