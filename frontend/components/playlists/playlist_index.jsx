import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    // if (this.props.playlists.length == 0) {
      this.props.fetchPlaylists();
    // }
  }

  render() {
    const { playlists, songToAdd, createPlaylistAdd, fetchNextPlaylist, fetchAndPlayPlaylist, toggleModal, destroySongToAdd } = this.props;

    const PlaylistsList = playlists.map(playlist => (
      <PlaylistIndexItem
        className="playlists-grid-item"
        key={playlist.id}
        playlist={playlist}
        songToAdd={songToAdd}
        fetchAndPlayPlaylist={fetchAndPlayPlaylist}
        fetchNextPlaylist={fetchNextPlaylist}
        createPlaylistAdd={createPlaylistAdd}
        toggleModal={toggleModal}
        destroySongToAdd={destroySongToAdd}
      />
    ));

    return (
      <div className="playlists-index-container">
        <h1 className="playlists-header">Playlists: </h1>
        <div className="playlists-index">
          <ul className = "playlists-grid-container">
            {PlaylistsList}
          </ul>
        </div>
      </div>
    );
  }
};

export default PlaylistIndex;
