import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  // TESTING PURPOSES ->
    window.signup = APIUtil.signup;
    window.login = APIUtil.login;
    window.logout = APIUtil.logout;
  // <- TESTING PURPOSES

  const store = configureStore();
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Soundify Suckkkkkkaaaas</h1>, root);
});
