import React from "react";
// import { Link } from "react-router-dom";
import { TiMail} from 'react-icons/ti'

export default function Footer() {
  return (
   
    <>
      <br />
<footer className="footer text-center text-lg-start   ">
  
  
  {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>



  
  
  </section> */}

  <br />

  <section >
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
    
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
 
          <h6 className="text-uppercase fw-bold mb-2">
            Institute of Technology, Gopeshwar
          </h6>
          <p>
          The department of Computer Science and Engineering at the  Institute of Technolog Gopeshwar promotes innovation-centric education and performs cutting-edge research
          </p>
        </div>
  

  
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            Quick Access
          </h6>
          <p>
            <a href="https://itgopeshwar.ac.in/?page_id=120" className="text-reset">About College</a>
          </p>
          <p>
            <a href="https://itgopeshwar.ac.in/?page_id=289" className="text-reset">Apply Online</a>
          </p>
         
        </div>



        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
     
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="https://itgopeshwar.ac.in/?page_id=2344" className="text-reset">Administration</a>
          </p>
          
          <p>
            <a href="https://online.uktech.ac.in/ums/Admission/Account/Login" className="text-reset">UMS Student Portal</a>
          </p>
          <p>
            <a href="https://itgopeshwar.ac.in/?page_id=120" className="text-reset">Help</a>
          </p>
        </div>


  
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>Institute of Technology, Gopeshwar, Chamoli Uttarakhand-246424</p>
          <p >
           
            itgopeshwar@gmail.com <TiMail style={{fontSize:"30px"}}/>
          </p>
          
        </div>
     
      </div>

    </div>
  </section>



  <div className="text-center footer-text p-4" >
      &copy; {new Date().getFullYear()} Copyright:{" "}
    <a className="text-reset fw-bold" href="https://itgopeshwar.ac.in/">CSE, Institute of Technology Gopeshwar</a>
  </div>
  
</footer>
    </>
   




    // <footer bg="light" className="text-center text-lg-left">
    //   <div className="text-center p-3">
    //     &copy; {new Date().getFullYear()} Copyright:{" "}
    //     <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
    //       Coffee & Code
    //     </Link>
    //   </div>
    // </footer>
  );
}
