import React, { Component } from 'react';
import './index.css';

// import Header from '../Header'
// import Navbar from '../Navbar'

class About extends Component {
  render() {

    return (
      <div>
        {/* <Header />
        <Navbar/> */}
      <div className='about' id='About'>
          <h2> The team</h2>
          <h2>Jax & Dyn </h2>
          <p>We wanted to create an app that we would use, and we did. Javi designed and developed a React front end that consumes the C#/.Net back end API and SQL database crafted by Brandyn.</p>
      </div>
    </div>
    )
  }
}

export default About
