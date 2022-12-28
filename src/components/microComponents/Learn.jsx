import React from "react";
import { Link } from "react-router-dom";
const Learn = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p>
            {" "}
            <Link className="link-text" to="/">
              Home{" "}
            </Link>
            /{" "}
            <Link className="link-text" to="/resources">
              Resources{" "}
            </Link>
            <span className="bold-text">/ Learning Philosophy</span>
          </p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Philosophy</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text-learn">
          <h2>
            ITG's educational <br /> philosophy{" "}
          </h2>
        </div>

        <br />

        <div className="main-text title-header-intro">
          <p className="phil-text">
            At ITG we believe that the best way children learn is through a
            holistic program where students are allowed to pursue their
            creativity and intrests in a community of learners. Combining
            academics with learning-by-doing approach.
          </p>
          <br />

          <div className="main-principles">
            <h4>Our principles</h4>

            <p>
              We have come a long way since We first started our Educational
              Institute. Much has changed in the educational vision and how we
              implemnt learning. However, our education has been based on
              certain principles that guide us today. These include.
              </p>
              <ol className="phil-test-list">
                <li>
                  <span className="list-bold">to develop competency</span>. Making students technically
                  competent and well trained software engineers to attain
                  National and International recognition.
                </li>
                <li>
                  <span className="list-bold" >to promote co-operation</span>. To frame and disseminate high
                  quality program with the continuous and co-ordinate efforts of
                  faculty and student body at all academic levels and various
                  sectors.
                </li>
                <li>
                  {" "}
                  <span className="list-bold">a holistic development approach.</span>  To produce ethically
                  and socially responsible engineers who can involve themselves
                  for community development to increase the productivity by
                  providing suitable engineering solutions. To provide an
                  academically conducive environment for individuals to develop
                  as technologically superior, socially conscious and nationally
                  responsible citizens.
                </li>
              </ol>
           
          </div>
        </div>

        <div className="space-div"></div>

        {/* <div className="main-text title-header-intro">
          <h3>Undergraduate Studies</h3>
          <br />
          <br />

          <div className="main-text-links">
           <p className="text-underline">Academic Notices</p>
           <p className="text-underline">Academic Results.</p>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Learn;
