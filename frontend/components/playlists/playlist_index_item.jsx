import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {

  return (
      <Link to={`/collections/playlists/${playlist.id}`}>
        <li className="playlistStyle">
          <ul className="playlist-index-item-padding">
            <li>{playlist.title}</li>
            <li><span>Number of songs: </span><span>{playlist.songs.length}</span></li>
          </ul>
        </li>
      </Link>
  );
}

export default PlaylistIndexItem;
