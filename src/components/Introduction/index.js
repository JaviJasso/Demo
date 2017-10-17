import React, { Component } from 'react';
import './index.css'

import Header from '../Header'
import About from '../About'
import Navbar from '../Navbar'

class Introduction extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar/>
      <div className='intro' id='Introduction'>
          <h2> THE IDEA BEHIND LIFE-FRAME</h2>
          <p>Life Frame is a web app borne out of passion for lifestyle. This is a tool for anyone who wants to take better care of themselves. </p>
      </div>
      <About />
    </div>
    )
  }
}

export default Introduction
