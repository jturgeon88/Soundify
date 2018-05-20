import React from 'react';
import { Route } from 'react-router-dom';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting/greeting_container';



const App = () => (
  <div>
    <header>
      <h1>Soundify</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
