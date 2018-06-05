import React from 'react';
import { Route } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import MainPage from './main_page';
import LeftNav from './left_nav';


const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/" component={LeftNav} />  
    <Route path="/" component={MainPage} />
  </div>
);

export default App;
