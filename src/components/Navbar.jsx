import { Col } from "react-bootstrap";
import { logo } from "../assets";
import { Link, NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import WhatsNew from "./pages/whatsNews";
import AboutDepartment from "./pages/AboutDepartment";
const Header = () => {
 

  return (

    <>
    
        {/* <Col className="d-flex align-items-center text-center flex-column">
            <img src={logo} alt="college" height="110px" />
          <h4>DEPARTMENT OF COMPUTER SCEINCE & ENGINEERING</h4>
          <h5>INSTITUTE OF TECHNOLOGY GOPESHWAR</h5>
       
        


        </Col> */}

        <div className="top" style={{fontSize:"1.1rem"}}>
          <div>
           <img src={logo} alt="college" height="130px" />

          </div>
          <div className="intro-top" >
          <h3 style={{fontSize:"1.5rem"}}>COMPUTER SCEINCE AND ENGINEERING</h3>
          <h6>INSTITUTE OF TECHNOLOGY GOPESHWAR</h6>

          </div >
          

        </div>

        <div>
        <Navbar  className="nav justify-content-center"  bg="light" expand="lg">
      <Container className="nav justify-content-center">
        <Navbar.Brand  style={{textAlign:"center", marginLeft: 180 }}>
          <Link to="/" className="links">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            

            <NavDropdown title="Announcements" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link to="/Noticeboard" className="links" >
                Noticeboard
                </Link>
                
                </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Newsroom
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Job Offer</NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
               
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Academics" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link to="/programme" className="links">
                Programme
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/schedule" className="links" >TimeTable</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Course co-ordinator</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="People" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Faculty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Students
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alumini</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Staff
              </NavDropdown.Item> */}
            </NavDropdown>

            {/* <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lecture Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Department clubs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}


            <NavDropdown title="About US" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <Link className="links" to="/department" >
                About CSE Department
                </Link>
               
                </NavDropdown.Item>

              <NavDropdown.Item >
                <Link to="/message" className="links">HOD's Message</Link>
              </NavDropdown.Item>

              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>


        </Navbar>


        
        </div>
    </>
  );
};

export default Header;
