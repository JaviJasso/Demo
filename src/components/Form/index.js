import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import { Link } from 'react-router-dom'
import './index.css';

const INITIAL_STATE = {
  mood: '',
  breakfast: '',
  lunch: '',
  dinner: '',
  exercise: '',
  smoke: '',
  alcohol: '',
  sex: '',
};


class Form extends Component {
  static propTypes = {
    addTracker: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
     if (this.selectedCheckboxes.has(label)) {
       this.selectedCheckboxes.delete(label);
     } else {
       this.selectedCheckboxes.add(label);
     }
   }


  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });

  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    // Add the field (meaning our state) to the App's state (fields).
    this.props.addTracker(this.state);
    // Clear our form
    this.setState(INITIAL_STATE);
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

    fetch(`https://trackmyhealth.azurewebsites.net/api/FormData/me`, options)
      .then(res => {
        console.log('Created field successfully:', res);
      })
      .catch(err => {
        console.error('Unable to create field:', err);
      });
  }



  render() {
    return (
      <div className="add-form">
        <h2>Tracker</h2>
        <form onSubmit={this.onSubmitHandler}>
          {/* Mood */}
          <Field
            label="Did you have good day?"
            onChange={(event) => this.onChangeHandler('mood', event.target.value)}
            value={this.state.mood}
            fieldType="checkbox"

          />
          {/* Breakfast */}
          <Field
            label="Healthy Breakfast"
            onChange={(event) => this.onChangeHandler('breakfast', event.target.value)}
            value={this.state.breakfast}
            fieldType="checkbox"

          />
          {/* Lunch */}
          <Field
            label="Healthy Lunch"
            onChange={(event) => this.onChangeHandler('lunch', event.target.value)}
            value={this.state.lunch}
            fieldType="checkbox"
          />
          {/* Dinner */}
          <Field
            label="Healthy Dinner"
            onChange={(event) => this.onChangeHandler('dinner', event.target.value)}
            value={this.state.dinner}
            fieldType="checkbox"
          />
          {/* Exercise */}
          <Field
            label="Exercise"
            onChange={(event) => this.onChangeHandler('exercise', event.target.value)}
            value={this.state.exercise}
            fieldType="checkbox"
          />
          {/* Smoke */}
          <Field
            label="Did you Smoke"
            onChange={(event) => this.onChangeHandler('smoke', event.target.value)}
            value={this.state.smoke}
            fieldType="checkbox"
          />
          {/* Alcohol */}
          <Field
            label="Did you drink Alcohol"
            onChange={(event) => this.onChangeHandler('alcohol', event.target.value)}
            value={this.state.alcohol}
            fieldType="checkbox"
          />
          <Field
            label="Did you have Sex"
            onChange={(event) => this.onChangeHandler('sex', event.target.value)}
            value={this.state.sex}
            fieldType="checkbox"
          />
          <Link to={"/profile"}>
            <button type="submit">SAVE</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Form;
