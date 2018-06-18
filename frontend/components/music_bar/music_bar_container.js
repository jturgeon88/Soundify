import { connect } from 'react-redux';
import { fetchCurrentPlaylist } from '../../actions/music_bar_actions';
import MusicBar from './music_bar';

const mapStateToProps = (state) => ({
  currentPlaylist: state.entities.currentPlaylist  
});


const mapDispatchToProps = dispatch => ({
  fetchCurrentPlaylist: (id) => dispatch(fetchCurrentPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicBar);
