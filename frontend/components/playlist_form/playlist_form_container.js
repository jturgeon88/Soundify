import { connect } from 'react-redux';

import { createPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
