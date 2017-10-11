
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Introduction from '../Introduction';
import BaseLayout from '../BaseLayout';
import About from '../About';
import LogIn from '../LogIn';
import StageForm from '../StageForm';
import Auth from '../Auth';
import Profile from '../Profile';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={Introduction}/>
        <Route path="/about" component={About}/>
        <Route path="/login" render={(props) => <LogIn auth={auth} {...props} />} />
        <Route path="/form" render={(props) => {
            handleAuthentication(props);
            return <StageForm {...props} /> }}/>
        {/* // <Route exact path="/form" component={StageForm}/> */}
        <Route exact path="/form/userID" component={Profile}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

export default App;
