export const RECEIVE_SONG_TO_ADD = "RECEIVE_SONG_TO_ADD";
export const REMOVE_SONG_TO_ADD = "REMOVE_SONG_TO_ADD";

const receiveSongToAdd = songToAdd => ({
  type: RECEIVE_SONG_TO_ADD,
  songToAdd
});

const removeSongToAdd = () => ({
  type: REMOVE_SONG_TO_ADD
});

export const addSongToAdd = songToAdd => dispatch => (
  dispatch(receiveSongToAdd(songToAdd))
);

export const destroySongToAdd = () => dispatch => (
  dispatch(removeSongToAdd())
);
