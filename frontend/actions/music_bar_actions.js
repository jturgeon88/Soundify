import * as MusicBarAPIUtil from '../util/music_bar_util';

export const RECEIVE_CURRENT_PLAYLIST = "RECEIVE_CURRENT_PLAYLIST";


export const receiveCurrentPlaylist = currentPlaylist => ({
  type: RECEIVE_CURRENT_PLAYLIST,
  currentPlaylist
});


export const fetchCurrentPlaylist = id => dispatch => (
  MusicBarAPIUtil.fetchCurrentPlaylist(id)
    .then(currentPlaylist => dispatch(receiveCurrentPlaylist(currentPlaylist)))
);
