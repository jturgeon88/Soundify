import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST,
  RECEIVE_ARTIST_ERRORS
} from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default artistsReducer;
