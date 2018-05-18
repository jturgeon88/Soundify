import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  // TESTING PURPOSES ->
    window.signup = APIUtil.signup;
    window.login = APIUtil.login;
    window.logout = APIUtil.logout;
  // <- TESTING PURPOSES

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Soundify Suckkkkkkaaaas</h1>, root);
});
