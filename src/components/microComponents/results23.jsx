import React from "react";
import { Link } from "react-router-dom";
const Results23 = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p>
            {" "}
            <Link className="link-text" to="/">
              Home{" "}
            </Link>{" "}
            /{" "}
            <Link className="link-text" to="/resources">
              Resources{" "}
            </Link>/ 
            <Link className="link-text" to="/resources/results">
              Results{" "}
            </Link>
            <span className="bold-text">/ Results2023</span>
          </p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Results</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>Results for different Semester will be displayed here.</p>
          <p>Any updated information will be shared soon.</p>
        </div>

        <br />
        <br />

        <div className="main-text title-header-intro">
          <h3>Results</h3>

          <div className="main-text-links">
            <p><a
                href="https://result.uktech.ac.in/wp-content/uploads/2022/08/134_itgopesh_btech_6th_CSE50.pdf"
                className=" link-text"
                target="_blank"
              >  6<sup>th</sup> Semester Result </a></p>
            <p> <a
                href="https://drive.google.com/file/d/1ISsmWiVgrvYXvBEomCEoET8fvyVnI_3U/view?usp=sharing"
                className=" link-text"
                target="_blank"
              > 5<sup>th</sup> Semester Result </a></p>
            <p><a
                href="
                https://drive.google.com/file/d/1IPrN_v8hcYFauSyQ-TXkrswRvT-zPjYW/view"
                className=" link-text"
                target="_blank"
              >4<sup>th</sup> Semester Result</a></p>
            <p>3<sup>th</sup> Semester Result</p>
            <p>2<sup>th</sup> Semester Result</p>
            <p>1<sup>th</sup> Semester Result</p>
      
            

            
          </div>
        </div>
      </header>
    </>
  );
};

export default Results23;
