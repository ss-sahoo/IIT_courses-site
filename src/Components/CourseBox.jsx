import React from "react";
import "./Courses.css";
import eye from "../assets/fi-br-eye.png";

const CourseBox = ({ heading, title }) => {
  return (
    <>
      <div className="course_box">
        <div className="course_box_content">
          <h4 className="course_box_content_title">{heading}</h4>
          <p className="course_box_content_description">{title}</p>
        </div>
        <button className="course_box_button">
          <img src={eye} alt="" />
          <p className="course_box_button_text">View Curriculum</p>
        </button>
      </div>
      <hr className="course_box_hr" />
    </>
  );
};

export default CourseBox;
