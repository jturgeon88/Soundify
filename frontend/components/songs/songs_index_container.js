import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { toggleModal } from '../../actions/modal_actions';
import { addSongToAdd } from '../../actions/song_to_add_actions';

import SongsIndex from './songs_index';

const mapStateToProps = (state) => {
  const songsArr = Object.values(state.entities.songs);

  return {
    songs: songsArr
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  toggleModal: () => dispatch(toggleModal()),
  addSongToAdd: songToAdd => dispatch(addSongToAdd(songToAdd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex);
