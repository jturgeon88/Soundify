import React from 'react';
import SongIndexItem from './song_index_item';
import { Link } from 'react-router-dom';
// TODO We may want to use Link to render a link to the artist show page later

class SongsIndex extends React.Component {
  componentDidMount() {
    // fetch the songs from the database as soon as the component has mounted
    this.props.fetchSongs();
  };

  render() {
    // Get songs array from props
    const { songs } = this.props;

    // Map over the songs array and create a SongsIndexItem from each song object
    const SongsListItems = songs.map(song => <SongIndexItem key={song.id} song={song} />)

    return (
      <div className="songs-index-container">
        <h2>Songs:</h2>
        <div className="songs-index">
          <ul>
            {SongsListItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default SongsIndex;
