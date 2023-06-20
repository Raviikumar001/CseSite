import React from "react";
import { Link } from "react-router-dom";
const Notices = () => {
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
            <span className="bold-text">/ Notices</span>
          </p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Notices</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>For always staying updated on the latest Notices. </p>
          <p>More information to be added soon.</p>
        </div>

        <br />
        <br />

        <div className="main-text title-header-intro">
          <h3>Notices</h3>

          <div className="main-text-links">
          <p>
              <a
                href="https://uktech.ac.in/site/writereaddata/UploadNews/pdf/C_202306121747441127.pdf"
                className=" link-text"
                target="_blank"
              >
               1. Tentative B.Tech. Even Sem 2022-23 Schedule.
              </a>
              
            </p>

          <p>
              <a
                href="https://uktech.ac.in/site/writereaddata/UploadNews/pdf/C_202301031716133010.pdf"
                className=" link-text"
                target="_blank"
              >
               2. Tentative B.Tech. ODD Sem 2022-23 Schedule.
              </a>
              
            </p>
            <p>
              <a
                href="https://uktech.ac.in/site/writereaddata/uploadedCirculars/C_202212141115253131.pdf"
                className=" link-text"
                target="_blank"
              >
               3. Regarding Acamedic Registration & Enrolment Form Date
              extension. 2022-23
              </a>
              
            </p>

            <p> <a href="https://uktech.ac.in/site/writereaddata/uploadedCirculars/C_202212091643440195.pdf"   className=" link-text"
                target="_blank">4. Examamination Form For Regarding ODD sem examationa form 2022-23</a></p>

              <p> <a href="https://uktech.ac.in/site/writereaddata/uploadedCirculars/C_202212080911284130.pdf"   className=" link-text"
                target="_blank">5. Regarding Odd Sem Exam 2022-23 and attendance</a></p> 

          </div>
        </div>
      </header>
    </>
  );
};

export default Notices;
