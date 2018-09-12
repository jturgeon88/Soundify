import React from 'react';
import SongsIndexContainer from '../songs/songs_index_container';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchPlaylist, match, playlistId } = this.props;
    fetchPlaylist(playlistId);
    console.log('playlistId', playlistId);
  }

  componentWillReceiveProps(newProps) {
    const { playlist, playlistId, fetchPlaylist } = this.props;

    if (newProps.playlistId !== playlistId) {
      fetchPlaylist(newProps.playlistId);
    }
  }

  handleClick(event) {
    event.preventDefault();
    const { playlistId, fetchAndPlayPlaylist, setPlaying } = this.props;

    fetchAndPlayPlaylist(playlistId);
    setPlaying();
  }

  render() {
    const { playlist } = this.props;
    if (playlist) {
      console.log('playlist', playlist.title);
      console.log('author_id', playlist.author_id);
      console.log('songs', playlist.songs);
      // const songsArr = Object.values(playlist.songs);
      // console.log('songsArr', songsArr);

      const songsList = playlist.songs.map(song => <li key={song.id}>{song.name}</li>)
      const numSongs = songsList.length.toString() + " songs";
      const numSongsString = `${numSongs} songs`;
      return (
        <div className="playlist-show-container">
          <div className="playlist-show-info">
            <img className="playlist-show-image"></img>
            <h1 className="playlist-title">{playlist.title}</h1>
            <h2 className="playlist-length">{numSongs}</h2>
            <button className="button-teal playlist-show-play" onClick={this.handleClick}>Play</button>
          </div>
          <div className="playlist-songs-list">
            <SongsIndexContainer showPlaylist={playlist} />
          </div>
        </div>
      );
    } else {
      return (
        <h1>LOADING</h1>
      )
    }

  }
}

export default PlaylistShow;
