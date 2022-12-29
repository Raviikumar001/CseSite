import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p>
            {" "}
            <Link className="link-text" to="/">
              Home{" "}
            </Link>
            <span className="bold-text">/ About</span>
          </p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>About</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text about-text">
          <p>
            The core courses offered by the Department of Computer Engineering
            are B.Tech Degree in Computer Science and Engineering . These
            courses are aimed at providing theoretical and practical knowledge
            of Computer Science. The subjects in Bachelor’s level programme
            include Computer Architecture and Organisation,Automata Languages
            and Computation,Data Stuctures and Algorithms, Database Management
            Systems,Language Processor,Computer Networks,Advanced Architecture
            and Parallel Processing , Software Engineering, Digital Signal
            Processing ,Analysis and Design of Algorithms etc.
          </p>
          <p>
            Computer Science has the power to change the world. These courses
            offer a flexible and facinating programmes for the students who wish
            to acquire high skills in computers & applications, all supported by
            world class staff and facilities.
          </p>
        </div>

        <div className="space-div"></div>

        <div className="main-text title-header-intro">
          <h3>HOD's Message</h3>
          <div className="h-message">
            {/* <img
              src="https://itgopeshwar.ac.in/wp-content/uploads/2020/07/VARUN-PRABHAKAR-1-225x300-1.jpg"
              alt="React Logo"
              style={{ minHeight: 400, maxHeight: 400 }}
            /> */}
            <div className="h-message-text">
              <br />
              <p>
                <span>My dear students,</span>
                <br />
                <span>
                 Welcome to the Department of Computer Science and Engineering, Institute of Technology
                  Gopeshwar (ITG),Uttarakhand. We cannot imagine the world without Computer Technology, As Technology 
                  has become an essential and inevitable part of our daily lives. It is time to
                  realize that the finest society can be developed by using
                  creative minds in the advanced areas of Science and
                  Engineering. The Department focus is to train our students to get strong academic knowledge in the frontier areas of Computing Technology to
                  reach the pinnacle of success. 
                  We are proud of your
                  association with the college which will help in spreading the
                  technical education in this region. Computer Science Department is focused to create
                  an environment of the total development of students at
                  different levels viz. intellectual, attitudinal, emotional &
                  social. The college is poised to grow into an institute with a
                  difference having strategic planning, enabling students to
                  face the competitive world with confidence.
                </span>
                <br />
              </p>
            </div>
          </div>

          <br />

          {/* <div className="flex-div">
          <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/resources/notices" >Academic Notices </Link></p>
           <p className="text-underline"><Link className="link-text" to="/resources/results" >Academic Results</Link></p>
           <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/resources/learn" >What you'll Learn </Link></p>
          
           </div>
          </div>

        </div> */}
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

export default Services;
