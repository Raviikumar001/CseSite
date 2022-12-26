import React from "react";
// import { Link } from "react-router-dom";
import { TiMail} from 'react-icons/ti'

export default function Footer() {
  return (
   
    <>
      <br />

      <footer className="footer">
        <div className="div1">
          <h6>Institute of Technolo Gopeshwar</h6>
          <p>Gopeshwar Chamoli Rd, Kothiyal Sain, Uttarakhand</p>
          <p>Mail <TiMail /></p>
        </div>
        <div className="div2">
          <h6>Quick Access</h6>
          <p>About ITG</p>
          <p>Apply Online</p>

        </div>
        <div className="div3">
          <h6>Useful Links</h6>
          <p>Administration</p>
          <p>UMS Student Portal</p>
          <p> Help</p>
        </div>
        
      </footer>
    </>
  )
}