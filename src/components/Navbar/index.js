import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';


class NavBar extends Component {
  render() {

    return (
      <div className='navbar'>
        <nav>
         <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
         {/* <span> | </span> */}
         <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
         {/* <span> | </span> */}
         <NavLink activeClassName="selected" className="nav-link" to="/login">Log In</NavLink>
         {/* <span> | </span> */}
         {/* <NavLink activeClassName="selected" className="nav-link" to="/signup">Sign Up</NavLink>
         <span> | </span> */}
         <NavLink activeClassName="selected" className="nav-link" to="/form">Form</NavLink>
        </nav>
      </div>
    )
  }
}

export default NavBar
