import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.addSongToAdd(this.props.song);
    this.props.toggleModal();
  }

  render () {
    const { song, toggleModal, addSongToAdd, artist } = this.props;
    return (
      <li className="song-index-item">
        <div className="song-name-block">
          <span className="song-name">{song.name}</span>
          <span className="song-artist">{artist.name}</span>
        </div>
        <button className="button-add-song" onClick={this.handleClick} >Add To Playlist</button>
      </li>
    );
  }
}

export default SongIndexItem;
