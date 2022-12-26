import React from "react";

import { FaSpinner } from "react-icons/fa";

import event from "../../assets/events.jpg";

const Event = () => {
  return (
    <div className="news">
      <img
        src={event}
        alt="React Logo"
        style={{ minHeight: 400, maxHeight: 400, maxWidth: 500, objectFit:"cover" }}
      />

      <div
        className="news-section"
        style={{
          minHeight: 400,
          maxHeight: 400,
          overflowY: "auto",
          backgroundColor: "#15506C",
          color: "white",
        }}
      >
        <ul>
          <h4 style={{ paddingTop: "1em", paddingLeft: "1em" }}>
            Events / Seminars Corner{" "}
          </h4>
          {/* <li> <FaSpinner icon="spinner" className="fa-spin"/> first news</li> */}

          <li>
            <FaSpinner icon="spinner" className="spinner" />Annual Sports Fest <span className="color-text">Pravaah 2022</span>  to start from 01-Dec-2022
          </li>
          <li>
            <FaSpinner icon="spinner" className="spinner" /> Price Distribution for Annual Sports Fest <span className="color-text">Pravaah 2022</span> 
          </li>
          {/* <li><FaSpinner icon="spinner" className="spinner" />   Anuall CSE Award function </li>
        <li><FaSpinner icon="spinner" className="spinner" />   Publication for CSE Branch magazine, please submit your submissions. </li>
        <li><FaSpinner icon="spinner" className="spinner" />   Awards ceremony for the Sports fest 2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Annual Sports Fest started from 27-11-2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores obcaecati nisi?</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae!</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Event;
