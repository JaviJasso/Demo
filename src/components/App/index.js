import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Introduction from '../Introduction';
import BaseLayout from '../BaseLayout';
// import About from '../About';
import LogIn from '../LogIn';
import StageForm from '../StageForm';
import Auth from '../Auth';
import Profile from '../Profile';
import history from '../History';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history}>
    <Switch>
      <BaseLayout>
        <Route exact path="/" render={(props) => {
          handleAuthentication(props);
          return <Introduction {...props} />
        }}/>
        {/* <Route path="/about" component={About}/> */}
        <Route path="/login" render={(props) => <LogIn auth={auth} {...props} />} />
        <Route path="/form" render={(props) => <StageForm {...props} /> }/>
        {/* // <Route exact path="/form" component={StageForm}/> */}
        <Route exact path="/profile" component={Profile}/>
      </BaseLayout>
    </Switch>
  </Router>
)

export default App;
