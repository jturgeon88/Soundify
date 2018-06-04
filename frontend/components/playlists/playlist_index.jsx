import React from 'react';
// import PlaylistIndexItem from './playlist_index_item';
import { Link } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    const { fetchPlaylists } = this.props;
    fetchPlaylists();
  }

  render() {
    const { playlists } = this.props;
    console.log(this.props);


    return (
      <div>
        <h1>Playlisssssts</h1>
        <ul className="all_playlists">
          { playlists.map((playlist) => <li>{playlist.title}</li>) }
        </ul>
      </div>
    );
  }
};

export default PlaylistIndex;
