import React, { useRef, useState, useNavigate } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../context/UserContext';
import { api } from "../utils/apiHelper";
import { useContext } from 'react';

const SignUp = () => {
  const actions = useContext(UserContext);
  const navigate = useNavigate();
  //State
  const firstName = useRef(null);
  const lastName = useRef(null);
  const password = useRef(null);
  const passwordAgain = useRef(null)
  const [errors, setErrors] = useState([])
  // Event Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    const accountUser = {
      firstName : firstName.current.value,
      lastName : lastName.current.value,
      password : password.current.value,
      passwordAgain :  passwordAgain.current.value,

    }
    try{
      const response = await api("/account", 'POST', accountUser);
      if(response.status === 201){
        await actions.signIn(accountUser);
        navigate("/");
      }else{
        setErrors(["Sign-up was unsuccessful"])
      }
    }catch(error){
      navigate("/error");

    }
  }
  return (
    <>
    <h1>
        Register
    </h1>
    <form onSubmit={handleSubmit}>
        <label >First Name:</label>
        <input aria-label='first-name-input'></input>
        <label>Last Name:</label>
        <input aria-label='last-name-input'></input>
        <label>Password</label>
        <input aria-label='password-input'></input>
        <label>Password Again</label>
        <input aria-label='password-input'></input>
    </form>
    <button className='signup-btn' >Submit</button>
    <p>Already have a user account? Click here to <Link to="/signin">sign up</Link>!</p> 
    </>
    
  )
}

export default SignUp