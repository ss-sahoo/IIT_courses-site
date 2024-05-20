import React from "react";
import "./Courses.css";
import CourseBox from "./CourseBox";

function Courses() {
  return (
    <div className="courses">
      <div className="courses_header">
        <button className="courses_header_button">
          <h4>DataScience Course learning path </h4>
        </button>
      </div>

      <h2 className="courses_title">
        <span className="courses_title_spanmain">Data Science </span>
        <span className="courses_title_span">Course Curriculum</span>{" "}
      </h2>
      <div className="courses_content">
        <CourseBox
          heading="C++"
          title="Learn C++ for strong programming fundamentals.
"
        />
        <CourseBox
          heading="MERN Stack"
          title="Master the MERN stack for high-demand projects."
        />
        <CourseBox
          heading="Data Structure & Algorithm"
          title="Excel in Data Structures and Algorithms for interview success.
"
        />
        <CourseBox
          heading="Competitve Programming"
          title="Excel in Data Structures and Algorithms for interview success.
"
        />
      </div>
    </div>
  );
}

export default Courses;
