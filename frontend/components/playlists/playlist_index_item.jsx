import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
  }

  handleClick(event) {
    event.preventDefault();
    if (Object.keys(this.props.songToAdd).length === 0 && this.props.songToAdd.constructor === Object) {
      this.props.fetchAndPlayPlaylist(this.props.playlist.id);
      this.props.setPlaying();
    } else {
      const playlistAdd = { playlist_id: this.props.playlist.id, song_id: this.props.songToAdd.id };
      this.props.createPlaylistAdd(playlistAdd);
      this.props.toggleModal();
      this.props.destroySongToAdd();
    }
  }

  render () {
    return (
      <div className="playlist-index-item">
        <div className="playlist-button-container">
          <button className="button-playlist" onClick={this.handleClick}></button>
        </div>
        <Link to={`/collections/playlists/${this.props.playlist.id}`}>
          <li className="playlistStyle">
            <ul className="playlist-index-item-padding">
              <li>{this.props.playlist.title}</li>
              <li><span>Number of songs: </span><span>{this.props.playlist.songs.length}</span></li>
            </ul>
          </li>
        </Link>
      </div>
    );
  }
}



export default PlaylistIndexItem;
