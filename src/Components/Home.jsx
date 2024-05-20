import React from "react";
import "./Home.css";
import graduation from "../assets/Graduation hat.png";
import Button from "./Button";
import go from "../assets/fi-br-paper-plane.png";
import know from "../assets/fi-br-interrogation.png";
import group from "../assets/Group.png";
import grad from "../assets/Graduated.png";
import complete from "../assets/Complete.png";
import question from "../assets/Question mark.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_header">
          <img src={graduation} alt="" />
          <h4 className="home_header_title">
            An <span>IIT Delhi</span> Alumni Initiative
          </h4>
        </div>
        <div className="home_content">
          <h1 className="home_content_title">
            Become an Expert in the field of{" "}
            <span>Data Science with 6 courses</span>
          </h1>
          <h5 className="home_content_description">
            A specially crafted Tech Kickstarter, with 5+ extensive online
            courses.
          </h5>
          <div className="home_content_button">
            <Button title="Personal Mentorship" />
            <Button title="Internship Assistance" />
            <Button title="Industry Certified Courses" />
          </div>
          <div className="home_content_footer-main">
            <div className="home_content_footer">
              <button className="home_content_footer_button">Enroll Now</button>
              <img src={go} alt="" />
            </div>
            <div className="home_content_footer_button2">
              <button className="home_content_footer_button2">Know More</button>
              <img src={know} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_home">
        <div className="footer_home_main">
          <img src={group} alt="" />
          <div className="footer_home_content">
            <h4 className="footer_home_content_title">24</h4>
            <p className="footer_home_content_description">Courses</p>
          </div>
        </div>
        <div className="footer_home_main">
          <img src={grad} alt="" />
          <div className="footer_home_content">
            <h4 className="footer_home_content_title">30K+</h4>
            <p className="footer_home_content_description">Learners</p>
          </div>
        </div>

        <div className="footer_home_main">
          <img src={question} alt="" />
          <div className="footer_home_content">
            <h4 className="footer_home_content_title">100K+</h4>
            <p className="footer_home_content_description">Doubts Solved</p>
          </div>
        </div>

        <div className="footer_home_main">
          <img src={complete} alt="" />
          <div className="footer_home_content">
            <h4 className="footer_home_content_title">10K+</h4>
            <p className="footer_home_content_description">Student Projects</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
