import React, { Component } from 'react'
import './index.css'
import Header from '../Header'
import Navbar from '../Navbar'
import auth from '../Auth';

import {Redirect } from 'react-router-dom'

class LogIn extends Component {

  login() {
      this.props.auth.login();
    }

  componentDidMount() {
    // auth.login()
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Header />
        <Navbar/>
        <div className="login">
        <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
                <Redirect to='/form' />
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </button>
                {' '}to continue.
              </h4>
            )
        }
      </div>
      {/* <div className='login' id='LogIn'>
        <div className='log'>
        <h2>Log in</h2>
          <form>
            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
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
