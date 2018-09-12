import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAndPlaySong, togglePlaying } from '../../actions/music_bar_actions';

import Search from './search';

const mapStateToProps = ({ entities }) => {
  const songsArr = Object.values(entities.songs);

  return {
    songs: songsArr,
    artists: entities.artists,
    isPlaying: entities.isPlaying,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchArtists: () => dispatch(fetchArtists()),
  fetchAndPlaySong: (id) => dispatch(fetchAndPlaySong(id)),
  togglePlaying: () => dispatch(togglePlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
