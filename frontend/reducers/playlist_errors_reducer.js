import {
  RECEIVE_PLAYLIST_ERRORS
} from '../actions/playlist_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
