import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist, fetchAndPlayPlaylist }) => {

  // function handleClick(event) {
  //   event.preventDefault();
  //   return fetchAndPlayPlaylist(playlist.id);
  // }

  return (
    <div>
      <Link to={`/collections/playlists/${playlist.id}`}>
        <li className="playlistStyle">
          <ul className="playlist-index-item-padding">
            <li>{playlist.title}</li>
            <li><span>Number of songs: </span><span>{playlist.songs.length}</span></li>
          </ul>
        </li>
      </Link>
      <button onClick={() => fetchAndPlayPlaylist(playlist.id)}>Play Playlist</button>
    </div>
  );
}

export default PlaylistIndexItem;
