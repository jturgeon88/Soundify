import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { toggleModal } = this.props;
    return (
      <div className="header-nav-container" >
        <ul className="header-nav-links">
          <li><Link to="/collections/playlists">Playlists</Link></li>
          <li><Link to="/collections/songs">Songs</Link></li>
          <li><Link to="/collections/artists">Artists</Link></li>
          <li><button onClick={toggleModal}>New Playlist</button></li>
        </ul>
      </div>
    );
  }
}

export default HeaderNav;
