import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  RECEIVE_PLAYLIST_ERRORS,
} from '../actions/playlist_actions';

// import {
//   RECEIVE_SONGS,
//   RECEIVE_SONG,
//   REMOVE_SONG
// } from '../../actions/song_actions';

import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  // let songId, playlistId;

  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, action.playlists);
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.playlist);
    case REMOVE_PLAYLIST:
      newState = merge({}, state);
      delete newState[action.playlist.id];
      return newState;
    // case RECEIVE_SONG:
    //   newState = merge({}, state);
    //   songId = parseInt(Object.keys(action.song)[0]);
    //   playlistId = action.song[songId].playlistId;
    //   newState[playlistId].songs.push(songId);
    //   return newState;
    // case REMOVE_SONG:
    //   newState = merge({}, state);
    //   songId = action.song.id;
    //   playlistId = action.song.playlistId;
    //   const songArray = state[action.song.playlistId].songs;
    //   const songIndex = songArray.indexOf(songId);
    //   songArray.splice(songIndex, 1);
    //   return newState;
    default:
      return state;
  }
};

// TODO add cases for RECEIVE_SONG and REMOVE_SONG


export default playlistsReducer;
