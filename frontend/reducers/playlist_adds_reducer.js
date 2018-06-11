import {
  RECEIVE_PLAYLIST_ADDS,
  RECEIVE_PLAYLIST_ADD,
  REMOVE_PLAYLIST_ADD
} from '../actions/playlist_add_actions';
import merge from 'lodash/merge';

const playlistAddsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYLIST_ADDS:
      return action.playlistAdds;
    case RECEIVE_PLAYLIST_ADD:
      return merge({}, state, action.playlistAdd);
    case REMOVE_PLAYLIST_ADD:
      newState = merge({}, state);
      delete newState[action.playlistAdd.id];
      return newState;
    default:
      return state;
  }
};

export default playlistAddsReducer;
