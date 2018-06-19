import {
  ADD_PLAYLIST_TO_QUEUE,
  ADD_SONG_TO_QUEUE,
  PLAY_PLAYLIST,
  PLAY_SONG
} from '../actions/music_bar_actions';

import merge from 'lodash/merge';

const musicBarReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  let someObj;
  let playlistIndex;
  let songIndex;

  switch (action.type) {
    case ADD_PLAYLIST_TO_QUEUE:
      playlistIndex = Object.keys(action.playlist)[0];
      return [
        ...state].concat(action.playlist[playlistIndex].songs);
    case ADD_SONG_TO_QUEUE:
      songIndex = Object.keys(action.song)[0];
      return [
        ...state, action.song[songIndex]
      ];
    case PLAY_PLAYLIST:
      playlistIndex = Object.keys(action.playlist)[0];
      return action.playlist[playlistIndex].songs;
    case PLAY_SONG:
      songIndex = Object.keys(action.song)[0];
      return [action.song[songIndex]];
    default:
      return state;
  }
}


export default musicBarReducer;
