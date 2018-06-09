import * as ArtistAPIUtil from '../util/artist_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTIST_ERRORS = "RECEIVE_ARTIST_ERRORS";

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveArtistErrors = errors => ({
  type: RECEIVE_ARTIST_ERRORS,
  errors
});

export const fetchArtists = () => dispatch => (
  ArtistAPIUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)),
          errors => dispatch(receiveArtistErrors(errors.responseJSON)))
);

export const fetchArtist = id => dispatch => (
  ArtistAPIUtil.fetchArtist(id)
    .then(artist => dispatch(receiveArtist(artist)),
          errors => dispatch(receiveArtistErrors(errors.responseJSON)))
);
