import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='your Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id=""  placeholder='password'/>
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">Already have  an account? <span>Login here</span>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing  I agree to  the terms of  use & privacy policy.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
