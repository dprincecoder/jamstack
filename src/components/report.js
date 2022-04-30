import { CloudinaryContext, Image } from "cloudinary-react";
import React from "react";

const report = () => {
  return (
    <div>
      <div className="report">
        <p>Report New Case</p>
        <div className="report-input">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Location" />
          <input type="date" placeholder="Date" />
          <input type="time" placeholder="Time" />
          <textarea type="text" placeholder="Description" />
          <input type="file" id="upload" />
        </div>
        <div className="report-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default report;
