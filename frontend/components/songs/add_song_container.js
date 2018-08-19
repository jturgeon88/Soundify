import { connect } from 'react-redux';
import { createPlaylistAdd } from '../../actions/playlist_add_actions'
import PlaylistIndex from '../playlists/playlist_index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createPlaylistAdd: playlistAdd => dispatch(createPlaylistAdd(playlistAdd));
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
