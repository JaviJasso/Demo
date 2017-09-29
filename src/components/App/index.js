import React, { Component } from 'react';
import './index.css';

import Header from '../Header'
import Navbar from '../Navbar'
import Introduction from '../Introduction'
import About from '../About'
import Log from '../Log'
import Calendar from '../Calendar'
import Form from '../Form'
import Sign from '../Sign'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <Introduction />
        <About />
        <Form/>
        <Log />
        <Sign />
        <Calendar />
      </div>
    );
  }
}

export default App;
