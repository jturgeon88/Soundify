import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderNav from './header_nav';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import SongsIndexContainer from './songs/songs_index_container';
import ArtistsIndexContainer from './artists/artists_index_container';
import { fetchPlaylists } from '../actions/playlist_actions';

class MainPage extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {
    //   playlists = fetchPlaylists();
    // };
  }

  // componentDidMount() {
  //   fetchPlaylists();
  // }
  render () {
    return (
      <div className="main-page-container">
        <h1>MainPage</h1>
        <Switch>
          <Route exact path='/collections/playlists' component={HeaderNav} />
          <Route exact path='/collections/songs' component={HeaderNav} />
          <Route exact path='/collections/artists' component={HeaderNav} />
          <Route exact path='/collections/' component={HeaderNav} />
        </Switch>



        <Switch>
          <Route exact path='/collections/playlists' component={PlaylistIndexContainer} />
          <Route exact path='/collections' component={PlaylistIndexContainer} />
        </Switch>

        <Route path='/collections/songs' component={SongsIndexContainer} />
        <Route path='/collections/artists' component={ArtistsIndexContainer} />

      </div>
    );
  }

}


export default MainPage;
