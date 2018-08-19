import { connect } from 'react-redux';
import { fetchPlaylists, fetchPlaylist } from '../../actions/playlist_actions';
import { fetchAndPlayPlaylist, fetchNextPlaylist } from '../../actions/music_bar_actions';
import { createPlaylistAdd } from '../../actions/playlist_add_actions';
import { toggleModal } from '../../actions/modal_actions';
import { destroySongToAdd } from '../../actions/song_to_add_actions';

import PlaylistIndex from './playlist_index';


const mapStateToProps = (state) => {
  const playlistsArr = Object.values(state.entities.playlists);

  return {
    playlists: playlistsArr,
    songToAdd: state.entities.songToAdd
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  fetchAndPlayPlaylist: (id) => dispatch(fetchAndPlayPlaylist(id)),
  fetchNextPlaylist: (id) => dispatch(fetchNextPlaylist(id)),
  createPlaylistAdd: playlistAdd => dispatch(createPlaylistAdd(playlistAdd)),
  toggleModal: () => dispatch(toggleModal()),
  destroySongToAdd: () => dispatch(destroySongToAdd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
