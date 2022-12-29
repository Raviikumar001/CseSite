import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p> <Link className="link-text" to="/" >Home </Link><span className="bold-text">/ Resources</span></p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>About</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>Here are some of the resources that might help you.</p>
          <p>More information to be added soon.</p>
        </div>
        
        <div className="space-div">

        </div>
       

        <div className="main-text title-header-intro">
          <h3>Undergraduate Studies</h3>
          <br />

      

        <div className="flex-div">
          <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/resources/notices" >Academic Notices </Link></p>
           <p className="text-underline"><Link className="link-text" to="/resources/results" >Academic Results</Link></p>
           <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/resources/learn" >What you'll Learn </Link></p>
           {/* <p className="text-underline"> <Link className="link-text" to="/resources/requirements" >What we Look for. </Link></p> */}
           </div>
          </div>

        </div>

        </div>

        <div className="space-div">

        </div>

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
