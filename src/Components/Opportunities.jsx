import React from "react";
import "./Opportunities.css";
import group from "../assets/14327653_5474231 1.png";
import certificate from "../assets/new-certiciate-design.png";

import award from "../assets/award_star.png";

const Opportunities = () => {
  return (
    <div className="opportunities">
      <h4>
        Unlock <span>6 Certificates</span> &{" "}
        <span>Internship Opportunities!</span>
      </h4>
      <div className="opportunities_content">
        <div className="opportunities_content_left">
          <h4>
            Unlock <span>6 Certificates</span> &{" "}
            <span>Internship Opportunities!</span>
          </h4>
          <img src={certificate} alt="" />
          <div className="opportunities_content_left_buttons">
            <div className="home_button1">
              <img src={award} alt="" className="home_button_icon" />
              <p className="home_button_title">Official and Verified</p>
            </div>{" "}
            <div className="home_button1">
              <img src={award} alt="" className="home_button_icon" />
              <p className="home_button_title">Enhances Credibility</p>
            </div>
          </div>
        </div>
        <div className="opportunities_content_right">
          {" "}
          <h4>Bag Internship Opportunities!</h4>
          <p>
            With every course, we make you not only industry-ready but also help
            you crack your first internship.
          </p>
          <img src={group} alt="" />
          <div className="opportunities_content_left_buttons"></div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
