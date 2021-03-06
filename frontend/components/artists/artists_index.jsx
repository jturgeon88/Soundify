import React from 'react';

import ArtistsIndexItem from './artist_index_item';

class ArtistsIndex extends React.Component {
  componentDidMount() {
    if (this.props.artists.length == 0) {
      this.props.fetchArtists();
    }
  }

  render() {
    const { artists } = this.props;

    const ArtistsIndexList = artists.map(artist => <ArtistsIndexItem key={artist.id} artist={artist} />)

    return (
      <div className="artists-index-container">
        <div className="artists-index">
          <ul className="artists-row">
            {ArtistsIndexList}
          </ul>
        </div>
      </div>
    );
  }
};

export default ArtistsIndex;
