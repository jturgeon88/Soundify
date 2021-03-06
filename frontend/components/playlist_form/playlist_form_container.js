import { connect } from 'react-redux';

import { createPlaylist } from '../../actions/playlist_actions';
import { toggleModal } from '../../actions/modal_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
