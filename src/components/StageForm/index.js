import React, {Component} from 'react'
import './index.css'
import Form from '../Form';

import Header from '../Header'
import Navbar from '../Navbar'


class StageForm extends Component {

  state = {
    trackers: [],
  }

  render(){
    return(
      <div>
        <Header />
        <Navbar/>
        <div className="Opp">
          <Form />
        </div>
      </div>
    )
  }
}


export default StageForm
