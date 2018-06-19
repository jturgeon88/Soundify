import React from 'react';

const ArtistIndexItem = ({ artist }) => (
  <li className="artist-index-item">
    <span className="artist-name">{artist.name}</span>
  </li>
);

export default ArtistIndexItem;
