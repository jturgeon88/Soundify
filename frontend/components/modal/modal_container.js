import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal_actions';
import { destroySongToAdd } from '../../actions/song_to_add_actions';
import Modal from './modal';

const mapStateToProps = (state) => ({
  modalIsOpen: state.ui.modal
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  destroySongToAdd: () => dispatch(destroySongToAdd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
