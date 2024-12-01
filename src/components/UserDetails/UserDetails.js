import React from "react";
import dots from '../../assets/dots.png'
import "./UserDetails.css";

function UserDetails() {
  return (
    <div className="user-card">
      <div className="user-header">
        <div className="avatar">CB</div>
        <div className="user-info">
          <h3>Hannibal Smith</h3>
          <p>1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>
      <div className="details-section">
        <div className="detail">
          <span>Customer ID</span>
          <strong>12345 <img src={dots} alt="dots"  className="dots"/></strong>
        </div>
        <div className="detail">
          <span>Email Address</span>
          <strong>rachel@sample.com<img src={dots} alt="dots"  className="dots"/></strong>
        </div>
        <div className="detail">
          <span>Phone Number</span>
          <strong>8051298905<img src={dots} alt="dots"  className="dots"/></strong>
        </div>
        
      </div>
      <button className="add-button">+ Add</button>
      <div className="details-section">
        <div className="detail">
          <span>Loyalty Tier</span>
          <strong>Silver<img src={dots} alt="dots"  className="dots"/></strong>
        </div>
        <div className="detail">
          <span>Segment</span>
          <strong>Sleepy Customer<img src={dots} alt="dots"  className="dots"/></strong>
        </div>
        
      </div>
      <button className="add-button">+ Add</button>
      <div className="details-section">
        <div className="detail">
          <span>Lifetime Value</span>
          <strong>$1M<img src={dots} alt="dots"  className="dots"/></strong>
        </div>
        <div className="detail">
          <span>Propensity to Purchase</span>
          <strong>75%<img src={dots} alt="dots"  className="dots"/></strong>
        </div>
      </div>
      <button className="add-button">+ Add</button>
      <div className="details-section">
        <div className="detail">
          <span>Engagement Score</span>
          <strong>80%<img src={dots} alt="dots" className="dots"/></strong>
        </div>
      </div>
      <button className="add-button">+ Add</button>
      <div className="actions">
        <button className="assign-agent">Assign other Agent</button>
        <button className="add-widget">Add New Widget</button>
      </div>
    </div>
  );
}

export default UserDetails;
