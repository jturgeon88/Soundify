import { connect } from 'react-redux';
import { toggleModal } from '../actions/modal_actions';
import HeaderNav from './header_nav';

const mapStateToProps = (state) => ({
  modalIsOpen: state.ui.modal
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);
