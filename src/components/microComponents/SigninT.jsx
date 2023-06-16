import React from 'react'
import { Link } from 'react-router-dom'

const SigninT = ({children}) => {
  return (
    <div className='forgot-text'>
     <h3>Having Trouble Logging in.</h3>
     <p>  If you're having Problmes logging into your Admin account. Please contact your Administrator
     for information.     </p>
     <Link to='/people/admin'>Back to Login</Link>
    
    </div>
  )
}

export default SigninT