import { connect } from 'react-redux';
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { fetchAndPlayPlaylist, fetchNextPlaylist } from '../../actions/music_bar_actions';

import PlaylistIndex from './playlist_index';


const mapStateToProps = (state) => {
  const playlistsArr = Object.values(state.entities.playlists);

  return {
    playlists: playlistsArr
  }
};

const mapDispatchToProps = dispatch => ({

  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchAndPlayPlaylist: (id) => dispatch(fetchAndPlayPlaylist(id)),
  fetchNextPlaylist: (id) => dispatch(fetchNextPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
