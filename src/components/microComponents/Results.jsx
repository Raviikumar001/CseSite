import React from "react";
import { Link } from "react-router-dom";
const Results = () => {
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
            </Link>
            <span className="bold-text">/ Results</span>
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
            <p> <Link className="link-text"to='/resources/results/result2023'>1. 2019- 2023 Batch</Link> </p>

            <p>2. 2020- 2024 Batch</p>

            <p>3. 2021-2025 Batch </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Results;
