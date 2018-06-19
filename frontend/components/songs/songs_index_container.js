import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

import SongsIndex from './songs_index';

const mapStateToProps = (state) => {
  const songsArr = Object.values(state.entities.songs);

  return {
    songs: songsArr
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex);
