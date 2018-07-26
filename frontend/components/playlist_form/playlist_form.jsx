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
  }

  render () {
    return (
      <div>
        <h1>Create new playlist</h1>
        <form className="playlist-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Playlist Name
            <input
              className="playlist-title-input"
              autoFocus
              type="text"
              placeholder="Start typing..."
              onChange={this.update('title')}
              value={this.state.title}></input>
          </label>
          <button onClick={this.props.toggleModal}>Cancel</button>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default PlaylistForm;
