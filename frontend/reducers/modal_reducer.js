import { TOGGLE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = false, action) => {
  Object.freeze();

  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
}

export default modalReducer;
