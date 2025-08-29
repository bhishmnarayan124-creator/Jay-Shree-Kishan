import React from "react";
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaComments, FaEye, FaShareAlt } from "react-icons/fa";
import "./Collcard.css";

const  Collcard = () => {
  return (
    <div className="card">
      <div className="top-section">
        <div className="promoted">Promoted</div>
        <div className="share-icon">
          <FaShareAlt />
        </div>
      </div>

      <h2 className="title">Bengali gram Required in Latur</h2>

      <div className="details-left">
        <p>
          Target Price: <strong>INR 62 / Kg</strong>
        </p>
        <p>
          Qty Required: <strong>130 Ton</strong>
        </p>
        <p>
          Posted On: <strong>1 day ago</strong>
        </p>
      </div>

      <div className="details-right">
        <div className="detail-item">
          <FaUser className="icon" />
          <span className="name">K MART</span>
        </div>
        <div className="detail-item">
          <FaMapMarkerAlt className="icon" />
          <span className="location">Latur,Maharashtra</span>
        </div>
      </div>

      <div className="bottom-section">
        <button className="call-btn">
          <FaPhoneAlt className="phone-icon" /> CALL
        </button>
        <div className="comments">
          <FaComments /> 0 Comments
        </div>
        <div className="views">
          <FaEye /> 4302 Views
        </div>
      </div>
    </div>
  );
};

export default Collcard;
