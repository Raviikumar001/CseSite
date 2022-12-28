// import React from "react";
// import { FaCheck } from "react-icons/fa";
// const Programme = () => {
//   return (
//     <div>
//       <h5>Core Subjects</h5>
//       <span>
//         Being affiliated to the Uttarakhand Tachnical University, The Computer
//         Science & Engineering department of the IT Gopeshwar follows the courses
//         and syllabus prescribed by UTU which focus on and provide in-depth
//         studies in the following main stream topics:.
//       </span>
//       <ul>
//         <li><FaCheck /> Fundamentals of Computer &amp; Programing</li>
//         <li> <FaCheck />Discrete Structures</li>
//         <li><FaCheck />  Computer Based Numerical &amp; Statistical Techniques</li>
//         <li><FaCheck />  Data Structures</li>
//         <li><FaCheck />  Digital Electronics &amp; Design Aspect</li>
//         <li><FaCheck />  Object Oriented Programming</li>
//         <li><FaCheck />  Engineering Economics &amp; Costing</li>
//         <li><FaCheck />  Computer Organization</li>
//         <li><FaCheck />  Unix &amp; Shell Programming</li>
//         <li><FaCheck />  Theory Of Automata &amp; Formal Language</li>
//         <li><FaCheck />  Database Management System</li>
//         <li><FaCheck />  Microprocessor</li>
//         <li><FaCheck />  Software Engineering</li>
//         <li><FaCheck />  Computer Graphics</li>
//         <li><FaCheck />  Computer Network</li>
//         <li><FaCheck />  Design &amp; Analysis of Algorithms</li>
//         <li><FaCheck />  Principles of Programming Languages</li>
//         <li><FaCheck />  Advance Java Programming</li>
//         <li><FaCheck />  Modeling &amp; Simulation</li>
//         <li><FaCheck /> Operating System</li>
//         <li><FaCheck /> Compiler Design</li>
//         <li><FaCheck /> Artificial Intelligence</li>
//         <li><FaCheck /> Graph Theory</li>
//         <li><FaCheck /> Visual Programming &amp; DotNet Technologies</li>
//         <li><FaCheck /> Principles of Management</li>
//         <li><FaCheck /> System Administration</li>
//         <li><FaCheck /> Advance Computer Architecture</li>
//         <li><FaCheck /> Data Warehousing &amp; Mining</li>
//         <li><FaCheck /> Distributed Computing</li>
//         <li><FaCheck /> Web Technology</li>
//       </ul>
//     </div>
//   );
// };

// export default Programme;

import React from "react";
import { Link } from "react-router-dom";
const Programme = () => {
  return (
    <>
      <header className="title-header">
        <div className="title-header-intro">
          <p> <Link className="link-text" to="/" >Home </Link> / <Link className="link-text" to="/academics" >Academics </Link><span className="bold-text">/ Programme</span></p>
        </div>

        <div className="tle-gutter">
          <h2 className="tle-gutter__title">
            <span>Programmes</span>
          </h2>
          <div className="tle-gutter__bg"></div>
        </div>

        <div className="head-text">
          <p>Being affiliated to the Uttarakhand Tachnical University, The Computer Science & Engineering department of the IT Gopeshwar follows the courses and syllabus prescribed by UTU which
             focus on and provide in-depth studies in the following main stream topics</p>
          
        </div>
        
        <div className="space-div">

        </div>
       

        <div className="main-text title-header-intro ">
          <h4>Core Subjects</h4>
          <br />
          <br />

          <div className="main-text-links">
           <p className="text-underline"> <Link className="link-text" to="/resources/notices" >Academic Notices </Link></p>
           <p className="text-underline"><Link className="link-text" to="/resources/results" >Academic Results</Link></p>
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

export default Programme;

