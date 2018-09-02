import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <div className="login-signup-background">
      <header>
        <h1 className="greeting-logo"><i className="fas fa-headphones"></i> Soundify</h1>
      </header>
      <section className="login-signup-container">
        <nav className="login-signup">
          <button className="button-teal button-session button-signup">
            <Link to="/signup">Sign Up</Link>
          </button>
          <div className="separator-container">
            <div className="separator-line"></div>
            <div className="separator-text">Already have an account?</div>
            <div className="separator-line"></div>
          </div>
          <button className="button-teal button-session button-login">
            <Link to="/login">Log In</Link>
          </button>
        </nav>
      </section>
    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h1 className="header-name">Welcome to Soundify {currentUser.username}!</h1>
      <button className="button-transparent header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
