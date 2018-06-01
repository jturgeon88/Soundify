import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  alternate() {
    let alternateMessage;
    if (this.props.formType == "signup") {
      alternateMessage = "Already have an account?";
    } else {
      alternateMessage = "Don't have an account?";
    }

    return alternateMessage;
  }

  render () {
    return (
      <div>
        <header>
          <h1 className="greeting-logo"><i className="fas fa-headphones"></i> Soundify</h1>
        </header>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
                />
              <br/>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
                />
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              <div>
                {this.alternate()} <span> {this.props.navLink}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
