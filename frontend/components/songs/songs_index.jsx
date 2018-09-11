import React from 'react';
import SongIndexItem from './song_index_item';
import { Link } from 'react-router-dom';
// TODO We may want to use Link to render a link to the artist show page later

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlaylist: this.props.showPlaylist
    }
  }
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
    const {
      toggleModal,
      addSongToAdd,
      artists,
      fetchAndPlaySong,
      togglePlaying,
      isPlaying,
      showPlaylist
    } = this.props;

    console.log('showPlaylist', !!showPlaylist);
    // console.log('showPlaylist.songs', showPlaylist.songs);
    let songs;
    if (!!showPlaylist) {
      songs = showPlaylist.songs;
    } else {
      songs = this.props.songs;
    }
    if (Object.keys(artists).length == 0) {
      return (<div></div>);
    }
    console.log('songs', songs);
    console.log('artists', artists);
    // Map over the songs array and create a SongsIndexItem from each song object
    const SongsListItems = songs.map(song => (
      <SongIndexItem
        key={song.id}
        song={song}
        artist={artists[song.artist_id]}
        toggleModal={toggleModal}
        addSongToAdd={addSongToAdd}
        fetchAndPlaySong={fetchAndPlaySong}
        togglePlaying={togglePlaying}
        isPlaying={isPlaying} />
    ));

    return (
      <div className="songs-index-container">
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
