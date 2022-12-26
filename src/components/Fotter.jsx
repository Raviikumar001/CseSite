import React from "react";
// import { Link } from "react-router-dom";
import { TiMail} from 'react-icons/ti'

export default function Footer() {
  return (
    
    <>
      <br />
      <div className="line"></div>
      <footer className="footer">
        <div className="div1 ">
          <h6 className="foot-head-text"><a href="https://itgopeshwar.ac.in/" target="_blank" style={{color: "black"}}>Institute of Technology Gopeshwar </a></h6>
          <p><a href="https://goo.gl/maps/6N6hNugdKqMEHATZ6" style={{color: "black"}} target="_blank" >Gopeshwar Chamoli Rd, Kothiyal Sain, Uttarakhand </a></p>
          <p> <a href="mailto:itgopeshwar@gmail.com" style={{color: "black"}}>itgopeshwar@gmail.com</a><TiMail /></p>
        </div>

        <div className="div2">
        <div className="inner-div1">
          <h6 className="foot-head-text">Quick Access</h6>
          <p>About ITG</p>
          <p>Apply Online</p>

        </div>
        <div className="inner-div1">
          <h6 className="foot-head-text">Useful Links</h6>
          <p>Administration</p>
          <p>UMS Student Portal</p>
          <p> Help</p>
        </div>

        </div>
        
      </footer>
    </>
  )
}