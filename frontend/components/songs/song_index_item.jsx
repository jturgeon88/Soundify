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
    const { song, toggleModal, addSongToAdd } = this.props;
    return (
      <li className="song-index-item">
        <span className="song-name">{song.name}</span>
        {/*<span className="song-name">{song.artist.name}</span>*/}
        <button className="button-add-song" onClick={this.handleClick} >Add To Playlist</button>
      </li>
    );
  }
}

export default SongIndexItem;
