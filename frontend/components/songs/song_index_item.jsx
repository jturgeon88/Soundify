import React from 'react';

const SongIndexItem = ({ song }) => (
  <li className="song-index-item">
    <span className="song-name">{song.name}</span>
    {/*<span className="song-name">{song.artist.name}</span>*/}
  </li>
);

export default SongIndexItem;
