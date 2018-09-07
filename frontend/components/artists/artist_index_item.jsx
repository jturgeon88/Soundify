import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => (
  <div className="artists-column">
    <div className="artist-button-container">
      <button className="button-artist"></button>
    </div>
    <Link to={`/collections/artists/${artist.id}`}>
      <div className="artist-style">
        <ul className="artist-index-item-padding">
          <li>{artist.name}</li>
        </ul>
      </div>
    </Link>
  </div>
);

export default ArtistIndexItem;
