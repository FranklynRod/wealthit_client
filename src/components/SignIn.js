import React, {useContext, useState, useRef} from 'react';
import { useLocation, useNavigation, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import ErrorDisplay from './ErrorDisplay';


const SignIn = () => {
 
  //State
  const username = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState([]);

   //Variables
   const location = useLocation();
   const navigate = useNavigation;
   const {actions} = useContext(UserContext);
   const credentials = {
     username: username.current.value, 
     password: password.current.value,   
   }
  
  //Event Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    let from = '/'
    if (location.state)
      from = location.state.from;
    
    try{
      const user = await actions.signIn(credentials)
      if(user){
        navigate(from);
      }else{
        setErrors(["Sign-in was unsuccessful"])
      }
    }catch(error){
      navigate('/error')
    }
  }
  return (
    <main>
      <h1>
    Sign in
     </h1>

<form onSubmit={handleSubmit}>
    <label >UserName:</label>
    <input aria-label='username-input'></input>
    <label>Password</label>
    <input aria-label='password-input'></input>
    <label>Password Again</label>
    <input aria-label='password-input'></input>
</form>
<button className='signin-btn' >Submit</button>
<p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p> 
</main>
  )
}

export default SignIn