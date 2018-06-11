import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LeftNav = () => (
  <div className="left-nav-container">
    <nav className="left-nav">
      <div className="left-nav-expand">
        <div className="left-nav-header">
          <a className="logo">LOGO Soundify</a>
          <ul>
            <li><Link to="/search" className="left-nav-group">Search</Link></li>
            <li><Link to="/collections/playlists" className="left-nav-group">Your Music</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default LeftNav;
