import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './index.css';
import Header from '../Header'
import Navbar from '../Navbar'


class  Profile extends Component {

  constructor() {
    super();
    this.state = {
      trackers: [],
    };
  }


  componentDidMount() {
    // Fetch trackers with the API.
    fetch(`http://trackmyhealth.azurewebsites.net/api/FormData/me`)
    .then(response => response.json())
    .then(trackers => this.setState({ trackers }))
    }


  render(){
    return (
      <div>
        <Header />
        <Navbar />
      <div className="profile">
        {map(this.state.trackers, (tracker) => (
          <div className="tracker">
            <p>Mood:{tracker.mood}</p>
            <p>Breakfats:{tracker.breakfast}</p>
            <p>Lunch:{tracker.lunch}</p>
            <p>Dinner:{tracker.dinner}</p>
            <p>Exercise:{tracker.exercise}</p>
            <p>Smoke:{tracker.smoke}</p>
            <p>Alcohol:{tracker.alcohol}</p>
            <p>Sex:{tracker.sex}</p>
          </div>
        ))}
      </div>
    </div>
    )
  }
}


Profile.propTypes = {
  trackers: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Profile


// const trackers = map(coolTrackers, (coolTrackers) => ({
//   mood: coolTrackers.trackMood,
//   breakfast: coolTrackers.trackBreakfats,
//   lunch: coolTrackers.trackLunch,
//   dinner: coolTrackers.trackDinner,
//   exercise: coolTrackers.trackExercise,
//   smoke: coolTrackers.trackSmoke,
//   alcohol: coolTrackers.trackAlcohol,
//   sex: coolTrackers.trackSex,
