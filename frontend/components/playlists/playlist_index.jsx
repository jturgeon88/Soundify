import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { Link } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists } = this.props;
    console.log(this.props.playlists);

    const PlaylistsList = playlists.map(playlist => <PlaylistIndexItem key={playlist.id} playlist={playlist} />)

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
