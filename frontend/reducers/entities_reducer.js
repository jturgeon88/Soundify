import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import playlistAddsReducer from './playlist_adds_reducer';
import musicBarReducer from './music_bar_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: playlistsReducer,
  playlist_adds: playlistAddsReducer,
  songs: songsReducer,
  artists: artistsReducer,
  nowPlayingQueue: musicBarReducer
});

export default entitiesReducer;

// TODO later we'll add playlists, songs, artists
