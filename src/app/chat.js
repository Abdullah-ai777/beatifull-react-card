import React from 'react';
import './chat.css';

const BusinessCard = () => {
  return (
    <div className="business-card">
      {/* Front Side */}
      <div className="card front">
        <div className="stripe"></div>
        <div className="logo">
          <span className="icon">∞</span>
          <h1>LOREM PRO</h1>
          <p>Title Goes Here</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="card back">
        <div className="design">
          <div className="yellow-shape"></div>
          <div className="white-shape"></div>
        </div>
        <div className="details">
          <div className="qr-code"></div>
          <h2>
            LOREM <span>IPSUM</span>
          </h2>
          <p>Your Title Here</p>
          <ul>
            <li>
              <strong>Phone:</strong> +000 000 000 000
            </li>
            <li>
              <strong>Email:</strong> yoursitename@domain.com
            </li>
            <li>
              <strong>Address:</strong> Street Address Here, lorem, 0000
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
