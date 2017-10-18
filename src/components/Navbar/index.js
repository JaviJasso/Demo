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
         <NavLink activeClassName="selected" className="nav-link" to="/profile">Profile</NavLink>
         <NavLink activeClassName="selected" className="nav-link" to="/login">Log In</NavLink>
        </nav>
      </div>
    )
  }
}

export default withRouter(NavBar)
