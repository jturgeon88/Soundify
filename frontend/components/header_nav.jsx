import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const HeaderNav = () => (
  <div className="header-nav-container" >
    <ul>
      <li><Link to="/collections/playlists">Playlists</Link></li>
      <li><Link to="/collections/songs">Songs</Link></li>
      <li><Link to="/collections/artists">Artists</Link></li>
    </ul>
  </div>
);

export default HeaderNav;
