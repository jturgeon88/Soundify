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
    const {
      playlists,
      songToAdd,
      createPlaylistAdd,
      fetchNextPlaylist,
      fetchAndPlayPlaylist,
      toggleModal,
      destroySongToAdd,
      setPlaying 
    } = this.props;

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
        setPlaying={setPlaying}
      />
    ));
    const songsModal = (Object.keys(this.props.songToAdd).length === 0 && this.props.songToAdd.constructor === Object) ? false : true;

    return (
      <div className={"playlists-index-container " + (songsModal ? 'modal-hidden' : '')}>
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
