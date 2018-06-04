import * as PlaylistAPIUtil from '../util/playlist_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST= "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
// TODO
// export const CLEAR_PLAYLISTS = "CLEAR_PLAYLISTS";
// export const RECEIVE_PLAYLIST_SEARCH_RESULTS = "RECEIVE_PLAYLIST_SEARCH_RESULTS";
// export const RECEIVE_RECENT_PLAYLISTS = "RECEIVE_RECENT_PLAYLISTS";

// Synchronous action creators:

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const removePlaylist = playlist => ({
  type: REMOVE_PLAYLIST,
  playlist
});

export const receivePlaylistErrors = errors => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors
});

export const removePlaylists = () => ({
  type: CLEAR_PLAYLISTS,
  playlists: []
});

// const receivePlaylistSearchResults = searchResults => ({
//   type: RECEIVE_PLAYLIST_SEARCH_RESULTS,
//   searchResults
// });
//
// const receiveRecentPlaylists = recentPlaylistResults => ({
//   type: RECEIVE_RECENT_PLAYLISTS,
//   recentPlaylistResults
// });


// Asynchronous action creators:

export const fetchPlaylists = () => dispatch => (
  PlaylistAPIUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)),
          errors => dispatch(receivePlaylistErrors(errors.responseJSON)))
);

export const fetchPlaylist = id => dispatch => (
  PlaylistAPIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)),
          errors => dispatch(receivePlaylistErrors(errors.responseJSON)))
);

export const createPlaylist = playlist => dispatch => (
  PlaylistAPIUtil.createPlaylist(playlist)
    .then(newPlaylist => dispatch(receivePlaylist(newPlaylist)),
          errors => dispatch(receivePlaylistErrors(errors.responseJSON)))
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistAPIUtil.updatePlaylist(playlist)
    .then(newPlaylist => dispatch(receivePlaylist(newPlaylist)),
          errors => dispatch(receivePlaylistErrors(errors.responseJSON)))
);

export const deletePlaylist = id => dispatch => (
  PlaylistAPIUtil.deletePlaylist(id)
    .then(playlist => dispatch(removePlaylist(playlist)),
          errors => dispatch(receivePlaylistErrors(errors.responseJSON)))
);

export const clearPlaylistErrors = () => dispatch => (
  dispatch(receivePlaylistErrors([]))
);

// export const searchPlaylists = title => dispatch => (
//   PlaylistAPIUtil.searchPlaylists(title)
//     .then(playlists => dispatch(receivePlaylistSearchResults(playlists)))
// );
//
// export const recentPlaylists = () => dispatch => (
//   PlaylistAPIUtil.recentPlaylists()
//     .then(serverPlaylists => dispatch(receiveRecentPlaylists(serverPlaylists)))
// );
