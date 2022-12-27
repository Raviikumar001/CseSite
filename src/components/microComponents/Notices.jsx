
import React from "react";
import { Link } from "react-router-dom";
const Notices = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
        <p> <Link className="link-text" to="/" >Home </Link> / <Link className="link-text" to="/resources" >Resources </Link><span className="bold-text">/ Notices</span></p>
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
           <p></p>
          </div>
        </div>

        
        
      </header>

    
     
      

     </>
  );
};

export default Notices;