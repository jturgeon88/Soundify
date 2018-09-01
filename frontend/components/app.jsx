import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from './main_page';
import LeftNav from './left_nav';
import MusicBarContainer from './music_bar/music_bar_container';
import { fetchPlaylist } from '../actions/playlist_actions';
import { ModalRoute } from '../util/route_util';
import PlaylistFormContainer from './playlist_form/playlist_form_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';


class App extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     currentSong: "bensound-slowmotion.mp3"
  //   };
  //
  //   this.changeSong = this.changeSong.bind(this);
  // }
  //
  // changeSong(newSong) {
  //   this.setState({currentSong: newSong})
  // }

  render () {
    return (
      <div className="app">

        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>

        <ProtectedRoute path="/collections" component={LeftNav} />
        <ProtectedRoute path="/collections" component={MainPage} />

        <Switch>
          <ModalRoute path="/collections/playlists" component={PlaylistFormContainer} />
          <ModalRoute exact path="/collections" component={PlaylistFormContainer} />
        </Switch>

        <ModalRoute path="/collections/songs" component={PlaylistIndexContainer} />


        <ProtectedRoute path="/" component={MusicBarContainer} />
        <Switch>
          <Route exact path="/" component={GreetingContainer} />
        </Switch>
      </div>
    );
  }
}


export default App;
