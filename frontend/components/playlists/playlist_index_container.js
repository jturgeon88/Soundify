import { connect } from 'react-redux';

import PlaylistIndex from './playlist_index';

import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => ({
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
