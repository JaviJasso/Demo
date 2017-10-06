import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import './index.css';

const INITIAL_STATE = {
  mood: '',
  breakfast: '',
  lunch: '',
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

  render() {
    return (
      <div className="add-form">
        <h2>Tracker</h2>
        <form onSubmit={this.onSubmitHandler}>
          {/* Mood */}
          <Field
            label="Mood rate 1-10"
            onChange={(event) => this.onChangeHandler('mood', event.target.value)}
            value={this.state.mood}
            fieldType="textarea"

          />
          {/* Breakfast */}
          <Field
            label="Breakfast"
            onChange={(event) => this.onChangeHandler('breakfast', event.target.value)}
            value={this.state.breakfast}
            fieldType="textarea"

          />
          {/* Lunch */}
          <Field
            label="Lunch"
            onChange={(event) => this.onChangeHandler('lunch', event.target.value)}
            value={this.state.lunch}
            fieldType="textarea"
          />
          {/* Dinner */}
          <Field
            label="Dinner"
            onChange={(event) => this.onChangeHandler('dinner', event.target.value)}
            value={this.state.dinner}
            fieldType="textarea"
          />
          {/* Exercise */}
          <Field
            label="Exercise"
            onChange={(event) => this.onChangeHandler('exercise', event.target.value)}
            value={this.state.exercise}
            fieldType="textarea"
          />
          {/* Smoke */}
          <Field
            label="Smoke"
            onChange={(event) => this.onChangeHandler('smoke', event.target.value)}
            value={this.state.smoke}
            fieldType="textarea"
          />
          {/* Alcohol */}
          <Field
            label="Alcohol"
            onChange={(event) => this.onChangeHandler('alcohol', event.target.value)}
            value={this.state.alcohol}
            fieldType="textarea"
          />
          <Field
            label="Sex"
            onChange={(event) => this.onChangeHandler('sex', event.target.value)}
            value={this.state.sex}
            fieldType="textarea"
          />
          {/* Notes */}
          {/* <Field
            label="Notes"
            onChange={(event) => this.onChangeHandler('notes', event.target.value)}
            value={this.state.notes}
            fieldType="textarea"
          /> */}
          {/* Submit */}
          <button type="submit">Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;
