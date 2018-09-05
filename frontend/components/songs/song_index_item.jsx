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
  }

  mouseOver(event) {
    event.preventDefault();
    this.setState({ isHovering: true });
  }

  mouseOut(event) {
    event.preventDefault();
    this.setState({ isHovering: false });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.addSongToAdd(this.props.song);
    this.props.toggleModal();
  }

  render () {
    const { song, toggleModal, addSongToAdd, artist } = this.props;
    return (
      <li className="song-index-item" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div className="song-index-inner">
          <button className="button-play-song"><i className={"fas " + (this.state.isHovering ? "fa-play" : "fa-music")}></i></button>
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
