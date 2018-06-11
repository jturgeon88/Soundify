import {
  RECEIVE_SONGS,
  RECEIVE_SONG_ERRORS
} from '../actions/song_actions';

import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default songsReducer;
