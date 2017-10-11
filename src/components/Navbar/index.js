import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import auth from '../Auth'
import './index.css';


class NavBar extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  render() {

    return (
      <div className='navbar'>
        <nav>
         <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
         {/* <span> | </span> */}
         <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
         <NavLink activeClassName="selected" className="nav-link" to="/login">Log In</NavLink>
         {/* <span> | </span> */}
         {/* {auth.isAuthenticated() ? <a className="nav-link" href="#" onClick={this.logout}>Log Out</a> : <a className="nav-link" href="#" onClick={this.login}>Log In</a> } */}
         {/* <span> | </span> */}
         {/* <NavLink activeClassName="selected" className="nav-link" to="/signup">Sign Up</NavLink>
         <span> | </span> */}
         <NavLink activeClassName="selected" className="nav-link" to="/form">Form</NavLink>
        </nav>
      </div>
    )
  }
}

export default withRouter(NavBar)
