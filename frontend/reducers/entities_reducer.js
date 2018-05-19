import { combineReducers } from 'redux';

import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;

// TODO later we'll add playlists, songs, artists
