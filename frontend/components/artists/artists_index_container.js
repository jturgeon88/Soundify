import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';

import ArtistsIndex from './artists_index';

const mapStateToProps = (state) => {
  const artistArr = Object.values(state.entities.artists);

  return {
    artists: artistArr
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsIndex);
