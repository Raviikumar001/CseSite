import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/classs1.jpeg";

import ImageViewer from "react-simple-image-viewer";

const Syllabus = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // const images = [
  //   "https://i.ibb.co/yRzMngr/cse3rd-year.jpg",
  //   "https://i.ibb.co/F3NbsVV/TIME-TABLE-FOR-CSE-4th-YEAR.jpg",
  //   "https://i.ibb.co/FVj6nrk/TIME-TABLE-FOR-CSE-2nd-YEAR-1.jpg",

  // ];
  // const openImageViewer = useCallback((index) => {
  //   setCurrentImage(index);
  //   setIsViewerOpen(true);
  // }, []);

  // const closeImageViewer = () => {
  //   setCurrentImage(0);
  //   setIsViewerOpen(false);
  // };

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
            <Link className="link-text" to="/academics">
              Academics{" "}
            </Link>{" "}
            <span className="bold-text">/ Class Schedule</span>
          </p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Syllabus</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>
            At Institute of Technology, Gopeshwar, we aim to provide a robust{" "}
            <br /> and inclusive curriculum for classes.
            <br /> The class schedules follows all norms of AICTE.
          </p>
        </div>

        <div className="space-div"></div>

        <div className="main-text title-header-intro">
          <h5>You can find schedules for various semester below.</h5>
          <br />

          <div className="main-text-links">
            <p className="text-underline">
              {" "}
              <a
                href="https://drive.google.com/file/d/1v73rSp-Z_dtn8YszqKFuWkKLfE4EFiqS/view"
                className=" link-text"
                target="_blank"
              >
                4<sup>th</sup> Year CSE
              </a>
            </p>
            <p className="text-underline">
              {" "}
              <a
                href="https://drive.google.com/file/d/1v73rSp-Z_dtn8YszqKFuWkKLfE4EFiqS/view"
                className=" link-text"
                target="_blank"
              >
                3<sup>rd</sup> Year CSE
              </a>{" "}
            </p>
            <p className="text-underline">
              <a
                href="
                https://drive.google.com/file/d/1XslIDF0ZQn8zA4y6vxR2HU2JLkhAy0nq/view?usp=share_link"
                className=" link-text"
                target="_blank"
              >
                2<sup>nd</sup> Year CSE
              </a>
            </p>
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

export default Syllabus;
