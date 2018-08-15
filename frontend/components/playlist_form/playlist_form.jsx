import React from 'react';


class PlaylistForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ""
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state);
    this.props.toggleModal();
  }

  render () {
    return (
      <div className="playlist-form-container">
        <form className="playlist-form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="playlist-form-header">
            <button className="button-close" onClick={this.props.toggleModal}><i className="fas fa-times"></i></button>
            <h1>Create new playlist</h1>
          </div>
          <div className="playlist-form-input-box">
            <label className="playlist-form-label"><h3>Playlist Name</h3>
              <input
                className="playlist-title-input"
                autoFocus
                type="text"
                placeholder="Start typing..."
                onChange={this.update('title')}
                value={this.state.title}></input>
            </label>
          </div>
          <div className="playlist-form-buttons">
            <button className="button-transparent" onClick={this.props.toggleModal}>Cancel</button>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PlaylistForm;
