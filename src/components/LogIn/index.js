import React, { Component } from 'react'
import './index.css'
import Header from '../Header'
import Navbar from '../Navbar'

class LogIn extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar/>
      <div className='login' id='LogIn'>
        <div className='log'>
        <h2>Log in</h2>
          <form>
            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <div className="clearfix">
                {/* <button type="button" className="cancelbtn">Cancel</button> */}
                <button type="submit" className="signupbtn">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default LogIn

//
// <span className="psw">
//   Forgot <a href="#">password?</a>
// </span>
