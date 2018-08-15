import React from 'react';

class Modal extends React.Component {
  render () {
    // Declare const for the component to be rendered in the modal (passed thru props)
    const Component = this.props.component;
    // Declare remaining props via Object destructuring
    const { modalIsOpen, toggleModal } = this.props;

    return (
      <div className="modal-container">
        { modalIsOpen &&
          (<React.Fragment>
            <div className="modal-background" onClick={toggleModal}>
            </div>
            <div className="modal-box">
              <Component {...this.props} />
            </div>
          </React.Fragment>
        )
      }
    </div>
    )
  }
}

export default Modal;
