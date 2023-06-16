import { useState, useEffect } from 'react';
import FormRow from '../microComponents/FormRow';
import { Link, useNavigate } from 'react-router-dom';
import {RiAccountCircleFill} from 'react-icons/ri'
import SigninT from '../microComponents/SigninT';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  };


const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  console.log(values.isMember)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='Form-Box'>
    <form  className='form'>

    <h3 className='heading-sign'>{values.isMember? 'Sign In' : 'Register'} <RiAccountCircleFill /></h3>


    {!values.isMember && (
      <FormRow
            type='text'
            name='Name'
            value={values.name}
            
          />
    )}

     {/* email input */}
     <FormRow
          type='email'
          name='Email'
          value={values.email}
        
        />
         {/* password input */}
         <FormRow
          type='password'
          name='Password'
          value={values.password}
          
        />
        <br />
        
      <button type='submit' className='button-submit' >
          Submit
        </button>

        <Link className='login-prob' to="/people/admin/forgotcredentials">Having Trouble Logging in?</Link>

        <p className='login-prob'>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='register-btn'>
           <p>{values.isMember ? 'Register' : 'Login'}</p> 
          </button>
        </p>

    </form>

       
    </div>
  )
}

export default Form