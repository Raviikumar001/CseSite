import React from "react";
import { Link } from "react-router-dom";
const Academics = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p> <Link className="link-text" to="/" >Home </Link><span className="bold-text">/ Academics</span></p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Academics</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>At Institute of Technology, Gopeshwar</p>
          <p>More information to be added soon.</p>
        </div>
        
        <div className="space-div">

        </div>
       
          

        <div className="main-text title-header-intro">
          <h3>Undergraduate Studies</h3>
          <br />
          <br />

          
        </div>
        <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/resources/notices" >Academic Notices </Link></p>
           <p className="text-underline"><Link className="link-text" to="/resources/results" >Academic Results</Link></p>
           
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

export default Academics;
