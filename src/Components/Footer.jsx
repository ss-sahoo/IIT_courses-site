import "./Footer.css";

import React from "react";
import demoImage from "../assets/Frame 18.png";

const Footer = () => {
  return (
    <div className="container">
      <h1>How does the Internship Program work?</h1>
      <div className="steps">
        <div className="step">
          <div className="icon">
            <img src={demoImage} alt="" />
          </div>
          <p>
            Learn from our structured pre-recorded courses made by experts to
            meet industry needs
          </p>
        </div>
        <div className="step">
          <div className="icon">
            <img src={demoImage} alt="" />
          </div>
          <p>
            1:1 live doubt solving support available throughout the day to clear
            your doubts instantly
          </p>
        </div>
        <div className="step">
          <div className="icon">
            <img src={demoImage} alt="" />
          </div>
          <p>
            Personal mentors to guide and help you throughout your journey as a
            friend
          </p>
        </div>
        <div className="step">
          <div className="icon">
            <img src={demoImage} alt="" />
          </div>
          <p>Build major projects which makes your resume stand apart</p>
        </div>
        <div className="step">
          <div className="icon">
            <img src={demoImage} alt="" />
          </div>
          <p>
            Get guaranteed paid internships after completion of the program
            along with course completion certificates
          </p>
        </div>
      </div>
      <button className="apply-button">Apply now for ₹ 2999</button>
    </div>
  );
};

export default Footer;
