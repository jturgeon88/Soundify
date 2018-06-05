import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {

  return (
      <Link to={`/playlist/view/${playlist.id}`}>
        <li className="playlistStyle">
          <ul className="playlist-index-item-padding">
            <li>{playlist.title}</li>
          </ul>
        </li>
      </Link>
  );
}

export default PlaylistIndexItem;
