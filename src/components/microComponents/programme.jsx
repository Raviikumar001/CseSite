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
       
          <br />
          <br />

          <div className="main-text-links">
           {/* <p className="text-underline"> <Link className="link-text" to="/resources/notices" >Academic Notices </Link></p>
           <p className="text-underline"><Link className="link-text" to="/resources/results" >Academic Results</Link></p> */}

            <div className="prog-tables ">
            <div>
            <h4>Core Subjects</h4> 
           <table className="tables">
             <tr>
              <td>1</td> 
              <td>Fundamentals of Computer & Programing</td>
             </tr>

             <tr>
              <td>2</td> 
              <td>Discrete Structures</td>
             </tr>
             <tr>
              <td>3</td> 
              <td>Computer Based Numerical & Statistical Techniques</td>
             </tr>
             <tr>
              <td>4</td> 
              <td>Data Structures</td>
             </tr>
             <tr>
              <td>5</td> 
              <td>Digital Electronics & Design Aspect</td>
             </tr>
             <tr>
              <td>6</td> 
              <td>Object Oriented Programming</td>
             </tr>
             <tr>
              <td>7</td> 
              <td>Engineering Economics & Costing</td>
             </tr>
             <tr>
              <td>8</td> 
              <td>Computer Organization</td>
             </tr>
             <tr>
              <td>9</td> 
              <td>Unix & Shell Programming</td>
             </tr>
             <tr>
              <td>10</td> 
              <td>Theory Of Automata & Formal Language</td>
             </tr>
             <tr>
              <td>11</td> 
              <td>Database Management System</td>
             </tr>
             <tr>
              <td>12</td> 
              <td>Microprocessor</td>
             </tr>
             <tr>
              <td>13</td> 
              <td>Software Engineering</td>
             </tr>
             <tr>
              <td>14</td> 
              <td>Computer Graphics</td>
             </tr>
             <tr>
              <td>15</td> 
              <td>Computer Network</td>
             </tr>
             <tr>
              <td>16</td> 
              <td>Design & Analysis of Algorithms</td>
             </tr>
             <tr>
              <td>17</td> 
              <td>Principles of Programming Languages</td>
             </tr>
             <tr>
              <td>18</td> 
              <td>Advance Java Programming</td>
             </tr>
             <tr>
              <td>19</td> 
              <td>Modeling & Simulation</td>
             </tr>
             <tr>
              <td>20</td> 
              <td>Operating System</td>
             </tr>
             <tr>
              <td>21</td> 
              <td>Compiler Design</td>
             </tr>
             <tr>
              <td>22</td> 
              <td>Artificial Intelligence</td>
             </tr>
             <tr>
              <td>23</td> 
              <td>Graph Theory</td>
             </tr>
             <tr>
              <td>24</td> 
              <td>Visual Programming & DotNet Technologies</td>
             </tr>
             <tr>
              <td>25</td> 
              <td>Principles of Management</td>
             </tr>
             <tr>
              <td>26</td> 
              <td>System Administration</td>
             </tr>
             <tr>
              <td>27</td> 
              <td>Advance Computer Architecture</td>
             </tr>
             <tr>
              <td>28</td> 
              <td>Data Warehousing & Mining</td>
             </tr>
             <tr>
              <td>29</td> 
              <td>Distributed Computing</td>
             </tr>
             <tr>
              <td>30</td> 
              <td>Web Technology</td>
             </tr>


           </table>

            </div>
          
           <div>
           <h4 className="elect">Elective Subjects.</h4>
           <table className="tables  table-2">
            <tr>
              <td>1</td>
              <td>Digital Image Processing</td>

            </tr>
            <tr>
              <td>2</td>
              <td>Soft Computing</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>Wireless Networks</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>Information Security</td>
              
            </tr>
            <tr>
              <td>4</td>
              <td>Information Security</td>
              
            </tr>
            <tr>
              <td>5</td>
              <td>Parallel Computing</td>
              
            </tr>
            <tr>
              <td>6</td>
              <td>Database Administration</td>
              
            </tr>
            <tr>
              <td>7</td>
              <td>Advance Computer Network</td>
              
            </tr>
            <tr>
              <td>8</td>
              <td>Fault Tolerant Computing</td>
              
            </tr>
            <tr>
              <td>9</td>
              <td>Computer Vision</td>
              
            </tr>
            <tr>
              <td>10</td>
              <td>Advanced DBMS</td>
              
            </tr>
            <tr>
              <td>11</td>
              <td>Intrusion Detection Systems</td>
              
            </tr>
            <tr>
              <td>12</td>
              <td>Cryptography & Network Security</td>
              
            </tr>
            <tr>
              <td>12</td>
              <td>Human Computer Interaction</td>
              
            </tr>

           </table>

           </div>
            </div>
          </div>
        </div>

     

        
      </header>

    
     
      

     </>
  );
};

export default Programme;

