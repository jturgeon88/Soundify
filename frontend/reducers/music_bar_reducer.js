import {
  RECEIVE_CURRENT_PLAYLIST
} from '../actions/music_bar_actions';

import merge from 'lodash/merge';

const musicBarReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_PLAYLIST:
      return action.currentPlaylist;
    default:
      return state;
  }
}


export default musicBarReducer;
