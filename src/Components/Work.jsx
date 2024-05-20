import React from "react";
import "./Work.css";
import time from "../assets/bx_time-five.png";
import WorkStep from "./WorkStep";
import step1 from "../assets/image 533.png";

const Work = () => {
  return (
    <div className="work">
      <h4 className="work_title">
        Don't miss out on this <span>limited-time opportunity</span> to learn
        for <span>Free!</span>
      </h4>
      <div className="work_content">
        <h4>100% Refund Offer 😎</h4>
        <p>20 Seats Left</p>
        <div
          className="range-slider grad"
          style={{
            "--min": 0,
            "--max": 100,
            "--step": 5,
            "--value": 40,
            "--text-value": `"40"`,
            "--fill-color": "#ebcb2e",
          }}
        >
          <input type="range" min="0" max="100" step="5" value={40} />

          <div className="range-slider__progress"></div>
        </div>
        <div className="work_content_clock">
          <img src={time} alt="" />
          <h5>Offer ends in 10:00Mins</h5>
        </div>
      </div>
      <h5 className="work_heading">How does it work?</h5>
      <div className="work_progress">
        <ul id="progress">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ul>
        <div className="work_footer">
          <WorkStep
            title="Step 1 : Enroll into your favorite course for only ₹1,499"
            description={<img src={step1} alt="" />}
            text="Start Learning with Lifetime Course Access. "
          />
          <WorkStep
            title="Step 2: Complete Course & Assignments within 2 Years!"
            description={<img src={step1} alt="" />}
            text="Finish the course within 2 Years to Qualify for Refund. "
          />
          <WorkStep
            title="Step 3: Receive 100% Refund upon completion"
            description={<img src={step1} alt="" />}
            text="Upon Course Completion within 2 Years, Get Your ₹1,499 Back."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
