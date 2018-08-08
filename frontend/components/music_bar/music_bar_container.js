import { connect } from 'react-redux';
import { fetchNextPlaylist } from '../../actions/music_bar_actions';
import MusicBar from './music_bar';

const mapStateToProps = ({entities}) => ({
  nowPlayingQueue: entities.nowPlayingQueue
});


const mapDispatchToProps = dispatch => ({
  fetchNextPlaylist: (id) => dispatch(fetchNextPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicBar);
