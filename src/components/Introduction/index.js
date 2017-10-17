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
          <p>We wanted to create a tool that will help to achieve a balance path.</p>
      </div>
      <About />
    </div>
    )
  }
}

export default Introduction
