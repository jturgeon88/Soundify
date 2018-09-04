import { connect } from 'react-redux';
import { fetchNextPlaylist, togglePlaying } from '../../actions/music_bar_actions';
import MusicBar from './music_bar';

const mapStateToProps = ({entities}) => ({
  nowPlayingQueue: entities.nowPlayingQueue,
  isPlaying: entities.isPlaying
});


const mapDispatchToProps = dispatch => ({
  fetchNextPlaylist: (id) => dispatch(fetchNextPlaylist(id)),
  togglePlaying: () => dispatch(togglePlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicBar);
