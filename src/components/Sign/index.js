import React, { Component } from 'react'
import './index.css'

class Sign extends Component {
  render() {
    return (
      <div className="sign">
        <form>
          <div class="imgcontainer">
            <img src="" alt="" class="" />
          </div>

          <div class="container">
            <label>
              <b>Username</b>
            </label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label>
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button type="submit">Login</button>
            <input type="checkbox" checked="checked" /> Remember me
          </div>

          <div class="container">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default Sign
