export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const fetchSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
);
