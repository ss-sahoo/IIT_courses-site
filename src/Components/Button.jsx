import React from "react";
import award from "../assets/award_star.png";
import "./Home.css";

const Button = ({ title }) => {
  return (
    <div className="home_button">
      <img src={award} alt="" className="home_button_icon" />
      <p className="home_button_title">{title}</p>
    </div>
  );
};

export default Button;
