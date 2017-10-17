import React, { Component } from 'react';
import Field from '../Field';
import { Link, withRouter } from 'react-router-dom'
import './index.css';

const INITIAL_STATE = {
  mood: false,
  breakfast: false,
  lunch: false,
  dinner: false,
  exerciseBehaviors: false,
  smoked: false,
  drank: false,
  sexed: false
};

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.addTrackerToApi(this.state);
  }

  addTrackerToApi = (tracker) => {
    const options = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.id_token}`
      }
    };

    fetch(`https://trackmyhealth.azurewebsites.net/api/FormData`, options)
      .then(res => {
        console.log('Created field successfully:', res);
        this.props.history.push('/profile');
      })
      .catch(err => {
        console.error('Unable to create field:', err);
      });
  }

  render() {
    return (
      <div className="add-form">
        <h2>LIFE STYLE</h2>
        <form onSubmit={this.onSubmitHandler}>
          {/* Mood */}
          <Field
            label="Have you had a good day?"
            onChange={(event) => this.onChangeHandler('mood', event.target.checked)}
            value={this.state.mood}
            fieldType="checkbox"

          />
          {/* Breakfast */}
          <Field
            label="Have you had a healthy breakfast?"
            onChange={(event) => this.onChangeHandler('breakfast', event.target.checked)}
            value={this.state.breakfast}
            fieldType="checkbox"

          />
          {/* Lunch */}
          <Field
            label="Have you had a healthy lunch?"
            onChange={(event) => this.onChangeHandler('lunch', event.target.checked)}
            value={this.state.lunch}
            fieldType="checkbox"
          />
          {/* Dinner */}
          <Field
            label="Have you had a healthy dinner?"
            onChange={(event) => this.onChangeHandler('dinner', event.target.checked)}
            value={this.state.dinner}
            fieldType="checkbox"
          />
          {/* Exercise */}
          <Field
            label="Did you exercise today?"
            onChange={(event) => this.onChangeHandler('exercise', event.target.checked)}
            value={this.state.exercise}
            fieldType="checkbox"
          />
          {/* Smoke */}
          <Field
            label="Have you smoked today?"
            onChange={(event) => this.onChangeHandler('smoke', event.target.checked)}
            value={this.state.smoke}
            fieldType="checkbox"
          />
          {/* Alcohol */}
          <Field
            label="Have you alcohol today?"
            onChange={(event) => this.onChangeHandler('alcohol', event.target.checked)}
            value={this.state.alcohol}
            fieldType="checkbox"
          />
          <Field
            label="Have you had sex today?"
            onChange={(event) => this.onChangeHandler('sex', event.target.checked)}
            value={this.state.sex}
            fieldType="checkbox"
          />
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
