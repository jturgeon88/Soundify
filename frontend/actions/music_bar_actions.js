import * as MusicBarAPIUtil from '../util/music_bar_util';

export const ADD_PLAYLIST_TO_QUEUE = "ADD_PLAYLIST_TO_QUEUE";
export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const PLAY_PLAYLIST = "PLAY_PLAYLIST";
export const PLAY_SONG = "PLAY_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SET_PLAY = "SET_PLAY";



export const addPlaylistToQueue = playlist => ({
  type: ADD_PLAYLIST_TO_QUEUE,
  playlist
});

export const addSongToQueue = song => ({
  type: ADD_SONG_TO_QUEUE,
  song
});

export const playPlaylist = playlist => ({
  type: PLAY_PLAYLIST,
  playlist
});

export const playSong = song => ({
  type: PLAY_SONG,
  song
});

export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const setPlay = () => ({
  type: SET_PLAY
});

export const fetchNextPlaylist = id => dispatch => (
  MusicBarAPIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(addPlaylistToQueue(playlist)))
);

export const fetchNextSong = id => dispatch => (
  MusicBarAPIUtil.fetchSong(id)
    .then(song => dispatch(addSongToQueue(song)))
);

export const fetchAndPlayPlaylist = id => dispatch => (
  MusicBarAPIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(playPlaylist(playlist)))
);

export const fetchAndPlaySong = id => dispatch => (
  MusicBarAPIUtil.fetchSong(id)
  .then(song => dispatch(playSong(song)))
);

export const togglePlaying = () => dispatch => (
  dispatch(togglePlay())
);

export const setPlaying = () => dispatch => (
  dispatch(setPlay())
);
