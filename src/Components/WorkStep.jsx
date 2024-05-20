import React from "react";
import "./WorkStep.css";

const WorkStep = ({ title, description, text }) => {
  return (
    <div className="workStep">
      <h4>{title}</h4>
      <div>{description}</div>
      <p>{text}</p>
    </div>
  );
};

export default WorkStep;
