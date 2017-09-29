import React, { Component } from 'react';
import './index.css';


class NavBar extends Component {
  render() {

    return (
      <nav className='navbar'>
        <a href='#Introduction' to='#Introduction'>Introduction</a>
        <a href='#About' to='#About'>About</a>
        <a href='#Log' to='#Log'>Log-In</a>
        <a href='#Calendar' to='#Calendar'>Calendar</a>
      </nav>
    )
  }
}

export default NavBar
