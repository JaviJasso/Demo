import React, {Component} from 'react';
import './index.css';


class Form extends Component {
  render() {
    return (
      <div className='form'>
        <form>
          <label className='mood'>
            <h1>La Vida</h1>

            <h3>How is your mood?</h3>
            <p>Very Happy
            <input type="radio" name="vhappy"/> </p>
            <p>Happy
            <input type="radio" name="happy" /></p>
            <p>Stable
            <input type="radio" name="stable" /> </p>
            <p>Could be better
            <input type="radio" name="couldbe" /></p>


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
            <input type="radio" name="chooseone" value='yes'/><label for='YES'>yes</label>
            <input type="radio" name="chooseone"  value='no'/><label for='NO'>no</label>
            </p>
            <p>Sleep
              <input type="radio" name="chooseone" value='yes'/><label for='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label for='NO'>no</label>
            </p>
            <p>Sex
              <input type="radio" name="chooseone" value='yes'/><label for='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label for='NO'>no</label>
            </p>
            <p>Alcohol
              <input type="radio" name="chooseone" value='yes'/><label for='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label for='NO'>no</label>
            </p>
            <p>Smoke
              <input type="radio" name="chooseone" value='yes'/><label for='YES'>yes</label>
              <input type="radio" name="chooseone"  value='no'/><label for='NO'>no</label>
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
