import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h4 className="header_logo">LOGO</h4>
        <div className="header_buttons">
          <button className="header_login">Login</button>
          <button className="header_signup">Signup</button>
        </div>
      </div>
      <div className="header_nav">
        <p className="header_overview">Overview</p>
        <p>Curriculum</p>
        <p>Refund</p>
        <p>Testimonials</p>
      </div>
    </div>
  );
};

export default Header;
