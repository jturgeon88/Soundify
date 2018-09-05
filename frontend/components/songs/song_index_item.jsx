import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      isPlayingSong: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.pressPlay = this.pressPlay.bind(this);
  }

  mouseOver(event) {
    event.preventDefault();
    this.setState({ isHovering: true });
  }

  mouseOut(event) {
    event.preventDefault();
    this.setState({ isHovering: false });
  }

  pressPlay(event) {
    event.preventDefault();
    this.setState({ isPlayingSong: true});
    this.props.fetchAndPlaySong(this.props.song.id);
    this.props.togglePlaying();
  }

  handleClick(event) {
    event.preventDefault();
    this.props.addSongToAdd(this.props.song);
    this.props.toggleModal();
  }

  render () {
    const { song, toggleModal, addSongToAdd, artist } = this.props;
    console.log(this.state.isPlayingSong);
    return (
      <li className="song-index-item" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className="song-index-inner">
          <button className="button-play-song" onClick={this.pressPlay}>
            <i className={"fas " + (this.state.isPlayingSong && this.props.isPlaying ? "fa-volume-up" : (this.state.isHovering ? "fa-play" : "fa-music"))}></i>
          </button>
          <section className="song-name-row">
            <div className="song-name-block">
              <span className="song-name">{song.name}</span>
              <span className="song-artist">{artist.name}</span>
            </div>
            <button className="button-add-song" onClick={this.handleClick} >Add To Playlist</button>
          </section>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
