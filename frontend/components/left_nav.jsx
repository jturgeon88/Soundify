import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LeftNav = () => (
  <div className="left-nav-container">
    <nav className="left-nav">
      <div className="left-nav-expand">
        <div className="left-nav-header">
          <a className="logo-side"><i className="fas fa-headphones"></i><h2>Soundify</h2></a>
          <ul className="left-nav-links">
            <li>
              <Link to="/collections/search" className="left-nav-group">
                <span>
                  <i className="fas fa-search"></i>
                </span>
                <span>
                  <h3>Search</h3>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/collections/playlists" className="left-nav-group">
                <i className="fas fa-music"></i>
                <h3>Your Music</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default LeftNav;
