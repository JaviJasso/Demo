import React, { Component } from 'react';
import './index.css';

class SignUp extends Component {
  render() {

    return (
      <div className='signUp' id='Log'>
        <div className='sign'>
          <form>
            <h2>Signup</h2>
            <div className="container">
              <label><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <label><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
              <input type="checkbox" checked="checked" /> Remember me
              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
