import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists, fetchNextPlaylist, fetchAndPlayPlaylist } = this.props;

    const PlaylistsList = playlists.map(playlist => (
      <PlaylistIndexItem
        key={playlist.id}
        playlist={playlist}
        fetchAndPlayPlaylist={fetchAndPlayPlaylist}
        fetchNextPlaylist={fetchNextPlaylist}
      />
    ));

    return (
      <div className="playlists-index-container">
        <h1 className="playlists-header">Playlists: </h1>
        <div className="playlists-index">
          <ul>
            {PlaylistsList}
          </ul>
        </div>
      </div>
    );
  }
};

export default PlaylistIndex;
