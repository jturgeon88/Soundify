import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// TESTING:
// import * as APIUtil from './util/session_api_util';
// import * as PlaylistAPIUtil from './util/playlist_util';
// import { login, logout, signup } from './actions/session_actions';
// import { fetchPlaylists, fetchPlaylist, createPlaylist, updatePlaylist, deletePlaylist } from './actions/playlist_actions';
// import * as SongAPIUtil from './util/song_util';
// import { fetchSongs } from './actions/song_actions';
// import * as ArtistAPIUtil from './util/artist_util';
// import { fetchArtists, fetchArtist } from './actions/artist_actions';
// import * as PlaylistAddAPIUtil from './util/playlist_add_util';
import { fetchPlaylistAdds , fetchPlaylistAdd, createPlaylistAdd, deletePlaylistAdd } from './actions/playlist_add_actions';
import { fetchNextPlaylist, fetchNextSong, fetchAndPlayPlaylist, fetchAndPlaySong } from './actions/music_bar_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING PURPOSES ->
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.fetchPlaylists = fetchPlaylists;
  // window.fetchPlaylist = fetchPlaylist;
  // window.createPlaylist = createPlaylist;
  // window.updatePlaylist = updatePlaylist;
  // window.deletePlaylist = deletePlaylist;
  // window.fetchSongs = SongAPIUtil.fetchSongs;
  // window.fetchSongs = fetchSongs;
  // window.fetchArtists = ArtistAPIUtil.fetchArtists;
  // window.fetchArtists = fetchArtists;
  // window.fetchArtist = fetchArtist;
  window.fetchAndPlayPlaylist = fetchAndPlayPlaylist;
  window.fetchAndPlaySong = fetchAndPlaySong;
  window.fetchNextPlaylist = fetchNextPlaylist;
  window.fetchNextSong = fetchNextSong;
  window.fetchPlaylistAdds = fetchPlaylistAdds;
  window.fetchPlaylistAdd = fetchPlaylistAdd;
  window.createPlaylistAdd = createPlaylistAdd;
  window.deletePlaylistAdd = deletePlaylistAdd;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // <- TESTING PURPOSES

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
