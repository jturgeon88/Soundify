import * as PlaylistAddAPIUtil from '../util/playlist_add_util';

export const RECEIVE_PLAYLIST_ADDS = "RECEIVE_PLAYLIST_ADDS";
export const RECEIVE_PLAYLIST_ADD = "RECEIVE_PLAYLIST_ADD";
export const REMOVE_PLAYLIST_ADD = "REMOVE_PLAYLIST_ADD";
export const RECEIVE_PLAYLIST_ADD_ERRORS = "RECEIVE_PLAYLIST_ADD_ERRORS";


export const receivePlaylistAdds = playlistAdds => ({
  type: RECEIVE_PLAYLIST_ADDS,
  playlistAdds
});

export const receivePlaylistAdd = playlistAdd => ({
  type: RECEIVE_PLAYLIST_ADD,
  playlistAdd
});

export const removePlaylistAdd = playlistAdd => ({
  type: REMOVE_PLAYLIST_ADD,
  playlistAdd
});

export const receivePlaylistAddErrors = errors => ({
  type: RECEIVE_PLAYLIST_ADD_ERRORS,
  errors
});


// Asynchronous action creators:

export const fetchPlaylistAdds = () => dispatch => (
  PlaylistAddAPIUtil.fetchPlaylistAdds()
    .then(playlistAdds => dispatch(receivePlaylistAdds(playlistAdds)),
          errors => dispatch(receivePlaylistAddErrors(errors.responseJSON)))
);

export const fetchPlaylistAdd = id => dispatch => (
  PlaylistAddAPIUtil.fetchPlaylistAdd(id)
    .then(playlistAdd => dispatch(receivePlaylistAdd(playlistAdd)),
          errors => dispatch(receivePlaylistAddErrors(errors.responseJSON)))
);

export const createPlaylistAdd = playlistAdd => dispatch => (
  PlaylistAddAPIUtil.createPlaylistAdd(playlistAdd)
    .then(playlistAdd => dispatch(receivePlaylistAdd(playlistAdd)),
          errors => dispatch(receivePlaylistAddErrors(errors.responseJSON)))
);

export const deletePlaylistAdd = id => dispatch => (
  PlaylistAddAPIUtil.deletePlaylistAdd(id)
    .then(playlistAdd => dispatch(removePlaylistAdd(playlistAdd)),
          errors => dispatch(receivePlaylistAddErrors(errors.responseJSON)))
);
