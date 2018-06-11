import React from 'react';

const SongIndexItem = ({ song }) => (
  <li className="song-index-item">
    <span className="song-title">{song.title}</span>
    {/*<span className="song-title">{song.artist.name}</span>*/}
  </li>
);

export default SongIndexItem;
