import React from "react";
// import { Link } from "react-router-dom";
import { TiMail} from 'react-icons/ti'
import {FaMapMarkedAlt} from 'react-icons/fa'



export default function Footer() {
  return (
    
    <>
    
      <div className="line"></div>
      <footer className="footer">
        <div className="div1 ">
          <h6 className="foot-head-text clg-text"><a href="https://itgopeshwar.ac.in/" target="_blank" style={{color: "black",  textDecoration:"none"}}>Institute of Technology Gopeshwar </a></h6>
          <p  ><a href="https://goo.gl/maps/6N6hNugdKqMEHATZ6" style={{color: "black"}} target="_blank" >Gopeshwar Chamoli Rd, Kothiyal Sain, Uttarakhand  < FaMapMarkedAlt  style={{fontSize: "1.4rem"}} /> </a></p>
          <p> <a href="mailto:itgopeshwar@gmail.com" style={{color: "black"}}>itgopeshwar@gmail.com</a><TiMail  style={{fontSize: "1.4rem"}}/></p>
        </div>

        <div className="div2">
        <div className="inner-div1">
          <h6 className="foot-head-text">Quick Access</h6>
          <p> <a href="https://itgopeshwar.ac.in/?page_id=120" style={{color: "black", textDecoration:"none"}} target="_blank" >About ITG</a></p>
          <p> <a href="https://itgopeshwar.ac.in/?page_id=289" style={{color: "black",  textDecoration:"none"}} target="_blank" >Apply Online</a></p>
          
        </div>
        <div className="inner-div1">
          <h6 className="foot-head-text">Useful Links</h6>
          <p><a href="https://itgopeshwar.ac.in/?page_id=244" style={{color: "black", textDecoration:"none"}} target="_blank" >Administration </a></p>
          <p> <a href="https://online.uktech.ac.in/ums/Admission/Account/Login" style={{color: "black", textDecoration:"none"}} target="_blank" >UMS Student Portal </a></p>
          
          
        </div>

        </div>
        
      </footer>
    </>
  )
}