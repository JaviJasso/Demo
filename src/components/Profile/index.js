import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './index.css';
import Header from '../Header'
import Navbar from '../Navbar'
import Graph from '../Graph'

class  Profile extends Component {

  constructor() {
    super();
    this.state = {
      trackers: [],
    };
  }


  componentDidMount() {
    // Fetch trackers with the API.
    fetch(`https://trackmyhealth.azurewebsites.net/api/FormData/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('id_token')}`
      }
    })
    .then(response => response.json())
    .then(trackers => this.setState({ trackers }))
  }

  render(){
    return (
      <div>
        <Header />
        <Navbar />
      <div className="profile">
        <Graph />
        {map(this.state.trackers, (tracker, i) => (
          <div className="tracker" key={i}>
            {/* <p>Mood:{tracker.mood}</p>
            <p>Breakfats:{tracker.breakfast}</p>
            <p>Lunch:{tracker.lunch}</p>
            <p>Dinner:{tracker.dinner}</p>
            <p>Exercise:{tracker.exercise}</p>
            <p>Smoke:{tracker.smoke}</p>
            <p>Alcohol:{tracker.alcohol}</p>
            <p>Sex:{tracker.sex}</p> */}
          </div>
        ))}
      </div>
    </div>
    )
  }
}

// Profile.propTypes = {
//   trackers: PropTypes.arrayOf(PropTypes.object).isRequired,
// }
export default Profile
