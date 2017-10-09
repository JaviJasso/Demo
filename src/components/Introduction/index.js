import React, { Component } from 'react';
import './index.css'

import Header from '../Header'
import Navbar from '../Navbar'

class Introduction extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar/>
      <div className='intro' id='Introduction'>
          <h2> Helping Developers</h2>
          <p>To track</p>
      </div>
    </div>
    )
  }
}

export default Introduction
