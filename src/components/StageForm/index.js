import React, {Component} from 'react'
import './index.css'
import map from 'lodash/map';

import PropTypes from 'prop-types';
// import Field from './Field';
import Form from '../Form';

import Header from '../Header'
import Navbar from '../Navbar'

const API = 'http://URLIDONTHAVEYET'

class StageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trackers: [],
    };
  }

  componentDidMount() {
    // Fetch trackers with the API.
    fetch(API)
      // .then((res) => res.json())  WORK ON THIS!! IT WAS BUGGING IT ASK JASON!!
      .then((coolTrackers) => {
        const trackers = map(coolTrackers, (coolTrackers) => ({
          mood: coolTrackers.trackMood,
          breakfast: coolTrackers.trackBreakfats,
          lunch: coolTrackers.trackLunch,
          dinner: coolTrackers.trackDinner,
          exercise: coolTrackers.trackExercise,
          smoke: coolTrackers.trackSmoke,
          alcohol: coolTrackers.trackAlcohol,
          sex: coolTrackers.trackSex,
        }));
        this.setState({ trackers });
      });
  }

  addTracker = (tracker) => {
    // Update our state with the new tracker.
    const { trackers } = this.state;
    trackers.push(tracker);
    this.setState({ trackers });
    // Send the API our new tracker.
    this.addTrackerToApi(tracker);
  }

  addTrackerToApi = (tracker) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        trackMood: tracker.mood,
        trackBreakfats: tracker.breakfast,
        trackLunch: tracker.lunch,
        trackExercise: tracker.exercise,
        trackSmoke: tracker.smoke,
        trackAlcohol: tracker.alcohol,
        trackSex: tracker.sex,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch(API, options)
      .then(res => {
        console.log('Created field successfully:', res);
      })
      .catch(err => {
        console.error('Unable to create field:', err);
      });
  }



  render(){
    return(
      <div>
        <Header />
        <Navbar/>
      <div className="Opp">
        <Form addTracker={this.addTracker}/>
      </div>
    </div>

    )
  }
}


export default StageForm
