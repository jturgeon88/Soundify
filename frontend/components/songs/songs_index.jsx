import React from 'react';
import SongIndexItem from './song_index_item';
import { Link } from 'react-router-dom';
// TODO We may want to use Link to render a link to the artist show page later

class SongsIndex extends React.Component {
  componentDidMount() {
    // fetch the songs from the database as soon as the component has mounted
    console.log("TESTING SONGS FORMAT1")
    console.log(this.props.songs.length);
    if (this.props.songs.length == 0) {
      this.props.fetchSongs();
    }
    console.log("TESTING SONGS FORMAT2")
    console.log(this.props.songs.length);
  };

  render() {
    // Get songs array from props
    const { songs, toggleModal, addSongToAdd } = this.props;

    // Map over the songs array and create a SongsIndexItem from each song object
    const SongsListItems = songs.map(song => <SongIndexItem key={song.id} song={song} toggleModal={toggleModal} addSongToAdd={addSongToAdd} />)

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
