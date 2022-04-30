import React from "react";
// import "./../styles/Home.module.css";

// import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-items">
          <div to="/" className="nav-logo">
            <div className="logo-img" style={{ display: "flex", marginLeft: '5px' }}>
              <img src="neighbor-logo.png" alt="" />
              <p style={{ margin: "1rem" }}>Helping Neigborhood </p>
            </div>
            {/* Helping Neigborhood */}
          </div>
          <ul className="nav-ul">
            <li to="/" className="nav-list active">
              Home
            </li>
            <li to="/" className="nav-list active">
              Report Now
            </li>
            <li to="/" className="nav-list active">
              Cases
            </li>
            <li to="/" className="nav-list active">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
