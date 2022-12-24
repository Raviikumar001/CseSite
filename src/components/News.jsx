import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const News = () => {
  return (
    <div className='news'>
      
        <div className='news-section' style={{minHeight:400, maxHeight:400,overflowY:'auto',backgroundColor:"#15506C", color:"white" }}>
        <ul>
        <h4 >Latest News</h4>
            {/* <li> <FaSpinner icon="spinner" className="fa-spin"/> first news</li> */}
            
            <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dignissimos omnis nostrum? </li>
            <li><FaSpinner icon="spinner" className="spinner" />   Practical exams from 02-01-2022</li>
            <li><FaSpinner icon="spinner" className="spinner" />   Anuall CSE Award function </li>
            <li><FaSpinner icon="spinner" className="spinner" />   Publication for CSE Branch magazine, please submit your submissions. </li>
            <li><FaSpinner icon="spinner" className="spinner" />   Awards ceremony for the Sports fest 2022</li>
            <li><FaSpinner icon="spinner" className="spinner" />   Annual Sports Fest started from 01-12-2022.Do submit your names for your respective groups.
            .Trial Selection will start shortly.</li>
            <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores obcaecati nisi?</li>
            <li><FaSpinner icon="spinner" className="spinner" />   </li>
        </ul>
        </div>
        <img src="https://www.cse.iitk.ac.in/images/LatestNEWS03.jpg" alt="React Logo"  style={{minHeight:400, maxHeight:400, maxWidth:500}}/>

        
    </div>
  )
}

export default News