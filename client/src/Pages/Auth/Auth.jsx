import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icon.png'
import AboutAuth from './AboutAuth';
import "./Auth.css"
import { login,signup } from '../../actions/auth';

const Auth = () => {
    const [IsSignup , setIsSignup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    
    const handleswitch = () => {
        setIsSignup(!IsSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
          alert("Enter email and password");
        }
        if (IsSignup) {
          if (!name) {
            alert("Enter a name to continue");
          }
          dispatch(signup({ name, email, password }, navigate));
        } else {
          dispatch(login({ email, password }, navigate));
        }
      };
    return (

    <section className='auth-section'>
    {
        IsSignup && <AboutAuth/>
    }
    <div className='auth-container-2'>
    {!IsSignup && <img src = {logo} alt='stack overflow' className='login-logo'/>} 
    <form onSubmit={handleSubmit}>
    {
     IsSignup &&
     <label htmlFor='name'>
            <h4>Display Name</h4>
            <input type='name' name='name' id='name'  onChange={(e) => {
                  setName(e.target.value);
                }}/>
        </label>

    }
        <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email'  onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
        </label>
        <label htmlFor='password'>
        <div style={{display:"flex" , justifyContent:"space-between"}}> 
        <h4>Password</h4>
        {!IsSignup && <h4 style={{color: "#007ac6" , fontSize:"13px"}}>forgot password?</h4>}
        </div>
        <input type='password' name='password' id='password'  onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
        { IsSignup && <p style={{color: "#666767" , fontSize: "13px"}}>Passwords must contain at least eight <br/> characters containing 1 letter and 1 number</p>}
        </label>
        {
            IsSignup && 
            <label htmlFor='check'>
                <input type='checkbox' id='check' className='check'/>
                <p style={{fontSize: "13px"}}>Opt-in to recieve occasional<br/> 
                product updates , user research inviatations, <br/>
                company announcements and digests</p>
            </label>
        }
        <button type = 'submit' className='auth-btn'>{IsSignup ? "Sign Up" : "Log In"}</button>
        {
            IsSignup &&
            <p style={{color: "#666767" , fontSize: "13px"}}>
                By clicking Sign Up ,you agree to our
                <span style={{color: "#007ac6"}}>terms of <br/>service</span> ,
                <span style={{color: "#007ac6"}}>privacy policy</span> and 
                <span style={{color: "#007ac6"}}>cookie policy</span>
            </p>
        }
    </form>
    <p>{IsSignup ? "Already have an account?" : "Don't have an account"}</p>
    <button type='submit' className='handle-switch-btn' onClick={handleswitch}>{IsSignup ? "Log In" : "Sign Up"}</button>
    </div>
    </section>
  )
}

export default Auth