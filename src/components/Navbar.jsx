import { Col } from "react-bootstrap";
import { logo } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import WhatsNew from "./pages/whatsNews";
import AboutDepartment from "./pages/AboutDepartment";
import "./navbar.css";
import { navItems, dropdownOne, dropdownTwo, dropdownThree, dropdownfour } from "./NavItems";
import Dropdown from "./Dropdown";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      {/* <Col className="d-flex align-items-center text-center flex-column">
            <img src={logo} alt="college" height="110px" />
          <h4>DEPARTMENT OF COMPUTER SCEINCE & ENGINEERING</h4>
          <h5>INSTITUTE OF TECHNOLOGY GOPESHWAR</h5>
       
        


        </Col> */}

      <div className="top" style={{ fontSize: "1.1rem" }}>
        <div>
          <img src={logo} alt="college" height="130px" />
        </div>
        <div className="intro-top">
          <h3>COMPUTER SCEINCE & ENGINEERING</h3>
          <h6>INSTITUTE OF TECHNOLOGY GOPESHWAR</h6>
        </div>
      </div>

      <div>
        <nav className="navbar">
          <ul className="nav-items">
            {navItems.map((item) => {
              // if (item.title === "Announcements") {
              //   return (
              //     <li key={item.id} className={item.cName}
              //     onMouseOver={() => setDropdown(true)}
              //     onMouseLeave={() => setDropdown(false)}
              //     >
              //       <Link
              //         to={item.path}
                     
              //       >
              //         {item.title}
              //       </Link>
              //       {dropdown && <Dropdown list={dropdownOne}/>}
              //     </li>
              //   );
              // }

              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}





            
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
