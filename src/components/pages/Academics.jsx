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
          <p>At Institute of Technology, Gopeshwar, we aim to provide a robust <br /> and inclusive list of courses to get you 
            well equipped with the industry <br /> standards.
          </p>
        
        </div>
        
        <div className="space-div">

        </div>
       
          

        <div className="main-text title-header-intro">
          <h3>Undergraduate Studies</h3>
          <br />
          

         <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/academics/programme" >Academic Course</Link></p>
           <p className="text-underline"><Link className="link-text" to="/academics/schedule" >Class schedules</Link></p>
           
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

export default Academics;
