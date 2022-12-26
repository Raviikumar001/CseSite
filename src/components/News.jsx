import React from "react";
import { FaSpinner } from "react-icons/fa";

const News = () => {
  return (
    <div className="news">
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
          <h4>Latest News</h4>
          {/* <li> <FaSpinner icon="spinner" className="fa-spin"/> first news</li> */}

          <li>
            <FaSpinner icon="spinner" className="spinner" />{" "}
            <span className="color-text">Animay Tiwari</span>, final year
            student at Computer Science and Engineering,Institute of Technology
            Gopeshwar, has been nominated for{" "}
            <span className="color-text">Young Innovator’s Award 2022</span> for
            Discovering an IOT Device to Track leg motion Activity of normal and
            orthotic persons and suggest an exercise based on their Gait
            analysis. Congratulations!{" "}
          </li>

          <li>
            <FaSpinner icon="spinner" className="spinner" /> Registration for
            Students for their Academic Session has started Last date to
            register 15th Decemeber at{" "}
            <a
              style={{ color: "white" }}
              href="https://online.uktech.ac.in/ums/Admission/Account/Login"
              target="_blank"
            >
              {" "}
              University Website.
            </a>{" "}
          </li>
          <li>
            <FaSpinner icon="spinner" className="spinner" />{" "}
            <span className="color-text">Animay Tiwari</span> along with his
            Teammates (Yogita Mathpal, Sagar Mishra, Priyanshu saxena, Sarthak
            joshi, Ruchi Rawat) has bagged 2nd position in
            <span className="color-text"> iUhackathon</span> organised by
            Uttarakhand Technical University and Indian Startup
            association(ISO). Congratulations!
          </li>
          <li>
            <FaSpinner icon="spinner" className="spinner" /> Second Sessional
            Exams to commence from 29-11-2022 to 30-11-2022 and on
            5-Nov-2022(3red and 5th Sem Students)
          </li>
          <li>
            <FaSpinner icon="spinner" className="spinner" /> Annual Sports{" "}
            <span className="color-text"> Pravaah (2022)</span> is about to
            begin do start to Register with your respective teams.
          </li>
          <li>
            <FaSpinner icon="spinner" className="spinner" />{" "}
            <span className="color-text">Animay Tiwari</span> , fourth year
            student and his team have been selected as Grand finalist for{" "}
            <span className="color-text"> SIH(Smart India Hackathon) 2022</span>
            . Congratulations!{" "}
          </li>
        </ul>
      </div>
      <img
        src="https://www.cse.iitk.ac.in/images/LatestNEWS03.jpg"
        alt="React Logo"
        style={{ minHeight: 400, maxHeight: 400, maxWidth: 500,  }}
      />
    </div>
  );
};

export default News;
