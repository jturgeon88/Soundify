import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't

  // TESTING PURPOSES ->
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // <- TESTING PURPOSES

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
