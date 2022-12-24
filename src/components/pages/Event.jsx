import React from 'react'

import { FaSpinner } from 'react-icons/fa';

import event from '../../assets/events.jpg'


const Event = () => {
  return (
    <div className='news'> 
         <img src={event} alt="React Logo"  style={{minHeight:400, maxHeight:400}}/>
     
    <div  style={{minHeight:400, maxHeight:400,overflowY:'auto',backgroundColor:"#15506C", color:"white" }}>
    <h4 style={{paddingTop: "1em", paddingLeft:"1em"}}>Events and Seminars</h4>
    <ul>
        {/* <li> <FaSpinner icon="spinner" className="fa-spin"/> first news</li> */}
        
        <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dignissimos omnis nostrum? </li>
        <li><FaSpinner icon="spinner" className="spinner" />   Practical exams from 02-01-2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Anuall CSE Award function </li>
        <li><FaSpinner icon="spinner" className="spinner" />   Publication for CSE Branch magazine, please submit your submissions. </li>
        <li><FaSpinner icon="spinner" className="spinner" />   Awards ceremony for the Sports fest 2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Annual Sports Fest started from 27-11-2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores obcaecati nisi?</li>
        <li><FaSpinner icon="spinner" className="spinner" />   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae!</li>
    </ul>
    </div>
   

    
</div>
  )
}

export default Event