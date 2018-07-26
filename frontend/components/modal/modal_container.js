import { connect } from 'react-redux';
import { toggleModal } from '../../actions/modal_actions';
import Modal from './modal';

const mapStateToProps = (state) => ({
  modalIsOpen: state.ui.modal
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
