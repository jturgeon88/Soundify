import React from 'react';
import { Route } from 'react-router-dom';

import PlaylistIndexContainer from './playlists/playlist_index_container';

const MainPage = () => (
  <div>
    <h1>MainPage</h1>

    <Route exact path='/playlists' component={PlaylistIndexContainer} />
    

  </div>
);

export default MainPage;
