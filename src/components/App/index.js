
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Introduction from '../Introduction';
import BaseLayout from '../BaseLayout';
import About from '../About';
import LogIn from '../LogIn';
import StageForm from '../StageForm';


import Auth from '../Auth';



const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={Introduction}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={LogIn}/>
        <Route exact path="/form" component={StageForm}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

const auth = new Auth();
auth.login();

export default App;
