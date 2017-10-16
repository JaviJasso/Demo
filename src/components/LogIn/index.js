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
    </div>
  </div>
    )
  }
}

export default LogIn
