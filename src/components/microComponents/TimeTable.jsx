import React from "react";
import { Link } from "react-router-dom";
const TimeTable = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p> <Link className="link-text" to="/" >Home </Link><span className="bold-text">/ Academics</span></p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Schedule</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>At Institute of Technology, Gopeshwar, we aim to provide a robust <br /> and inclusive curriculum for classes. 
          <br /> The class schedules follows all norms of AICTE. 
          </p>
        
        </div>
        
        <div className="space-div">

        </div>
       
          

        <div className="main-text title-header-intro">
          <h5>You can find schedules for various semester below.</h5>
          <br />
          

         <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/academics/programme" >4<sup>th</sup> Year CSE</Link></p>
           <p className="text-underline"> <Link className="link-text" to="/academics/programme" >3<sup>rd</sup> Year CSE</Link></p>
           <p className="text-underline"> <Link className="link-text" to="/academics/programme" >2<sup>nd</sup> Year CSE</Link></p>
           

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

export default TimeTable;
