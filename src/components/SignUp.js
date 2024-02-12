import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <><h1>
        Register
    </h1>
    <form>
        <label >First Name:</label>
        <input aria-label='first-name-input'></input>
        <label>Last Name:</label>
        <input aria-label='last-name-input'></input>
        <label>Password</label>
        <input aria-label='password-input'></input>
        <label>Password Again</label>
        <input aria-label='password-input'></input>
    </form>
    <button className='signup-btn'>Submit</button>
    <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p> 
    </>
    
  )
}

export default SignUp