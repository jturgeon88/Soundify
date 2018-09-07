import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderNavContainer from './header_nav_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import SongsIndexContainer from './songs/songs_index_container';
import ArtistsIndexContainer from './artists/artists_index_container';
import { fetchPlaylists } from '../actions/playlist_actions';



class MainPage extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className="main-page-container">
        <Switch>
          <Route exact path='/collections/playlists' component={HeaderNavContainer} />
          <Route exact path='/collections/songs' component={HeaderNavContainer} />
          <Route exact path='/collections/artists' component={HeaderNavContainer} />
          <Route exact path='/collections/' component={HeaderNavContainer} />
        </Switch>



        <Switch>
          <Route exact path='/collections/playlists' component={PlaylistIndexContainer} />
          <Route exact path='/collections' component={PlaylistIndexContainer} />
        </Switch>

        <Route exact path='/collections/songs' component={SongsIndexContainer} />
        <Route exact path='/collections/artists' component={ArtistsIndexContainer} />

      </div>
    );
  }

}


export default MainPage;
