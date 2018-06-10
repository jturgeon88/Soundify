export const fetchPlaylistAdds = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlist_adds'
  })
);

export const fetchPlaylistAdd = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlist_adds/${id}`
  })
);

export const createPlaylistAdd = playlistAdd => (
  $.ajax({
    method: 'POST',
    url: '/api/playlist_adds',
    data: { playlistAdd }
  })
);

export const deletePlaylistAdd = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlist_adds/${id}`
  })
)
