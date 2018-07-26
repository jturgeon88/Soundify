import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import ModalContainer from '../components/modal/modal_container';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id)
});

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/collections" />
    )
  )}/>
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
  }
  />
);

const Modal = ({ path, component: Component}) => (
  <Route
    path={path}
    render={(props) => <ModalContainer component={Component} /> } />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const ModalRoute = withRouter(connect(mapStateToProps, null)(Modal));
