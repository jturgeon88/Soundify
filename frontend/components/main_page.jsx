import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderNav from './header_nav';
import PlaylistIndexContainer from './playlists/playlist_index_container';

const MainPage = () => (
  <div className="main-page-container">
    <h1>MainPage</h1>
    <Switch>
      <Route path='/collections/playlists' component={HeaderNav} />
      <Route path='/collections/songs' component={HeaderNav} />
      <Route path='/collections/artists' component={HeaderNav} />
      <Route path='/collections/' component={HeaderNav} />
    </Switch>

    <Switch>
      <Route exact path='/collections/playlists' component={PlaylistIndexContainer} />
      <Route exact path='/collections' component={PlaylistIndexContainer} />
    </Switch>

  </div>
);

export default MainPage;
