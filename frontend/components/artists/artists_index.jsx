import React from 'react';

import ArtistsIndexItem from './artist_index_item';

class ArtistsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists } = this.props;

    const ArtistsIndexList = artists.map(artist => <ArtistsIndexItem key={artist.id} artist={artist} />)

    return (
      <div className="artists-index-container">
        <h2>Artists:</h2>
        <div className="artists-index">
          <ul>
            {ArtistsIndexList}
          </ul>
        </div>
      </div>
    );
  }
};

export default ArtistsIndex;
