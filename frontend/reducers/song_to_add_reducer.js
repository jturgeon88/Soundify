import { RECEIVE_SONG_TO_ADD, REMOVE_SONG_TO_ADD } from '../actions/song_to_add_actions';
import merge from 'lodash/merge';

const songToAddReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SONG_TO_ADD:
      return action.songToAdd;
    case REMOVE_SONG_TO_ADD:
      return {};
      // newState = merge({}, state);
      // delete newState[0];
      // return newState;
    default:
      return state;
  }
}

export default songToAddReducer;
