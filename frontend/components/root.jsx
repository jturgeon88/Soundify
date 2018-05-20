import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;
// This allows App to be rendered for all routes in the app. We'll define
// all of our routes in App
