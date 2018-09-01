import React from 'react';

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    event.preventDefault();
    this.props.toggleModal();
    this.props.destroySongToAdd();
  }

  render () {
    // Declare const for the component to be rendered in the modal (passed thru props)
    const Component = this.props.component;
    // Declare remaining props via Object destructuring
    const { modalIsOpen, toggleModal } = this.props;

    return (
      <div className="modal-container">
          { modalIsOpen &&
              (<React.Fragment>
                  <div className="modal-background" onClick={this.handleClick}>
                  </div>
                  <div className="modal-box">
                    <button className="button-close" onClick={this.handleClick}><i className="fas fa-times"></i></button>
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
