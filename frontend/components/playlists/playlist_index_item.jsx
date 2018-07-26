import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.fetchAndPlayPlaylist(this.props.playlist.id);
  }

  render () {
    return (
      <div>
        <Link to={`/collections/playlists/${this.props.playlist.id}`}>
          <li className="playlistStyle">
            <ul className="playlist-index-item-padding">
              <li>{this.props.playlist.title}</li>
              <li><span>Number of songs: </span><span>{this.props.playlist.songs.length}</span></li>
            </ul>
          </li>
        </Link>
        <button onClick={this.handleClick}>Play Playlist</button>
      </div>
    );
  }
}



export default PlaylistIndexItem;
