import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <div className="companies">
      <h4>
        Top Companies Hiring{" "}
        <span className="companies_span">Data Scientist</span>{" "}
      </h4>
      <div className="companies_content">
        <div className="companies_content_logo">
          <h6>Logo</h6>
        </div>
        <div className="companies_content_logo">
          <h6>Logo</h6>
        </div>
        <div className="companies_content_logo">
          <h6>Logo</h6>
        </div>
        <div className="companies_content_logo">
          <h6>Logo</h6>
        </div>
        <div className="companies_content_logo">
          <h6>Logo</h6>
        </div>
      </div>
    </div>
  );
};

export default Companies;
