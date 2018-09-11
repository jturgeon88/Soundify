import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchAndPlayPlaylist, setPlaying } from '../../actions/music_bar_actions';

import PlaylistShow from './playlist_show';

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;

  return {
    playlistId,
    playlist: state.entities.playlists[playlistId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchAndPlayPlaylist: id => dispatch(fetchAndPlayPlaylist(id)),
  setPlaying: () => dispatch(setPlaying())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistShow));
