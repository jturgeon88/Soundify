import React from 'react';
import SongIndexItem from './song_index_item';
import { Link } from 'react-router-dom';
// TODO We may want to use Link to render a link to the artist show page later

class SongsIndex extends React.Component {
  componentDidMount() {
    // fetch the songs from the database as soon as the component has mounted
    if (this.props.songs.length == 0) {
      this.props.fetchSongs();
    }

    if (Object.keys(this.props.artists).length == 0) {
      this.props.fetchArtists();
    }

  };

  render() {
    // Get songs array from props
    const { songs, toggleModal, addSongToAdd, artists } = this.props;
    console.log('artists', artists);
    // Map over the songs array and create a SongsIndexItem from each song object
    const SongsListItems = songs.map(song => <SongIndexItem key={song.id} song={song} artist={artists[song.artist_id]} toggleModal={toggleModal} addSongToAdd={addSongToAdd} />)

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
