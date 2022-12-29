import React from "react";
import { Link } from "react-router-dom";
import {HiBellAlert} from 'react-icons/hi2'
const People = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p> <Link className="link-text" to="/" >Home </Link><span className="bold-text">/ People</span></p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>community</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>The Computer Science Department Provides various Ways of connecting, with peers in
            the College Campus. Assuring your well being, we provide all oppurtunities and instances
            for your self-growth.
          </p>
          {/* <p>More information to be added soon.</p> */}
        </div>
        
        <div className="space-div">

        </div>
       

        <div className="main-text title-header-intro">
          <h4>Student Communities / Clubs</h4>
          <p style={{marginTop: "1em", fontSize: '1.25rem', lineHeight: "1.59em"}}>
            Our Deparment Provides Students with various oppurtunities to connect and enlarge thier vision and knowledge,
            We provide various communites where Students can learn and share experiance which will enlarge their growth
            in Tech and as well as non-tech fields (Communication ).
            <br />
            We provide students with various clubs and communites :
           

            
           
          </p>
          <ol className="people-list">
              <li>Machine Learning and AI</li>
              <li>Web Development</li>
              <li>competitive programming</li>
            </ol>
          <br />

          <h4>Online Conect</h4>

        <div className="flex-div">
          <div className="main-text-links">
            
           <p className="text-underline">  Student Login</p>
           <p className="text-underline"> Faculty Login</p>
           <p><HiBellAlert /> Login Dashboard will be available soon for use. Stay Tuned! </p>
           <div className="main-text-links">

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

export default People;
