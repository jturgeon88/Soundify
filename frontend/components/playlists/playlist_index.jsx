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
      <div>
        <h1>Playlists: </h1>
        <ul>
          {PlaylistsList}
        </ul>
      </div>
    );
  }
};

export default PlaylistIndex;
