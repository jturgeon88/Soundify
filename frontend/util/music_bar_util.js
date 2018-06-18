export const fetchCurrentPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);
