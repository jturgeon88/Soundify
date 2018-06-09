import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import playlistErrorsReducer from './playlist_errors_reducer';

const errorsReducer = combineReducers({
  login: sessionErrorsReducer,
  playlist: playlistErrorsReducer
});

// TODO we'll need to add in playlistForm errors later

export default errorsReducer;
