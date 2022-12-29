import React from 'react'
import { FaSpinner } from 'react-icons/fa';
const WhatsNew = () => {
  return (
    <div className='news'>
     
    <div class="col-md-7  col-sm-8 col-xs-8 wthree-offers1-right" style={{minHeight:400, maxHeight:400,overflowY:'auto',backgroundColor:"#15506C", color:"white" }}>
    <h4 style={{paddingTop: "1em", paddingLeft:"1em"}}>Notice Board</h4>
    <ul>
        {/* <li> <FaSpinner icon="spinner" className="fa-spin"/> first news</li> */}
        
        <li><FaSpinner icon="spinner" className="spinner" />  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dignissimos omnis nostrum? </li>
        <li><FaSpinner icon="spinner" className="spinner" />    Practical exams from 02-01-2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />    Anuall CSE Award function </li>
        <li><FaSpinner icon="spinner" className="spinner" />    Publication for CSE Branch magazine, please submit your submissions. </li>
        <li><FaSpinner icon="spinner" className="spinner" />    Awards ceremony for the Sports fest 2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />    Annual Sports Fest started from 27-11-2022</li>
        <li><FaSpinner icon="spinner" className="spinner" />    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores obcaecati nisi?</li>
        <li><FaSpinner icon="spinner" className="spinner" />    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae!</li>
    </ul>
    </div>
    <img src="https://media.istockphoto.com/id/599124676/photo/back-to-school.jpg?s=612x612&w=0&k=20&c=AVeq7nPyZhXRWdhHSvP_0qoL6MB-fVlZpQZ0oOObPR8=" alt="React Logo"  style={{minHeight:400, maxHeight:400}}/>

    
</div>
  )
}

export default WhatsNew