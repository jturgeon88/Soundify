import { TOGGLE_PLAY, SET_PLAY } from '../actions/music_bar_actions';

const isPlayingReducer = (state = false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TOGGLE_PLAY:
      const newState = !state;
      return newState;
    case SET_PLAY:
      return true;
    default:
      return state;
  }
}

export default isPlayingReducer;
