import React from 'react';
import { Route } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import PlaylistIndexContainer from './playlists/playlist_index_container';



const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path='/playlists' component={PlaylistIndexContainer} />
  </div>
);

export default App;
