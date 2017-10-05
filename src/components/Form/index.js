import React, {Component} from 'react';
import './index.css';

const INITIAL_STATE = {
  username: '',
  artist: '',
  title: '',
  notes: '',
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
    // Add the song (meaning our state) to the App's state (songs).
    this.props.addSong(this.state);
    // Clear our form
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div className='form' id='Form'>
        <form >
          <label className='mood'>
            <h1>Daily</h1>

            <h3>Today's Mood?</h3>
            <div className='moddy'>
            <p>Very Happy
            <input type="radio" name="vhappy"/> </p>
            <p>Happy
            <input type="radio" name="happy" /></p>
            <p>Stable
            <input type="radio" name="stable" /> </p>
            <p>Could be better
            <input type="radio" name="couldbe" /></p>
          </div>

          <h3>What did you eat?</h3>

            Breakfast
            <input type="textarea" name="breakfast"/>

            Lunch
            <input type="textarea" name="Lunch"/>

            Dinner
            <input type="textarea" name="dinner"/>

            Snacks
            <input type="textarea" name="snacks"/>


          <h3>Did you?</h3>
            <div className='behaviors'>
            <p>Exercise
            <input type="radio" name="chooseone" value='yes'/><label htmlFor='YES'>yes</label>
            <input type="radio" name="chooseone"  value='no'/><label htmlFor='NO'>no</label>
            </p>
            <p>Sleep
              <input type="radio" name="chooseone" value='yes'/><label htmlFor='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label htmlFor='NO'>no</label>
            </p>
            <p>Sex
              <input type="radio" name="chooseone" value='yes'/><label htmlFor='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label htmlFor='NO'>no</label>
            </p>
            <p>Alcohol
              <input type="radio" name="chooseone" value='yes'/><label htmlFor='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label htmlFor='NO'>no</label>
            </p>
            <p>Smoke
              <input type="radio" name="chooseone" value='yes'/><label htmlFor='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label htmlFor='NO'>no</label>
            </p>
          </div>
          <input type="submit" value="Submit" />
        </label>
        </form>
      </div>
    )
  }
}



export default Form
