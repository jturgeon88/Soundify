export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists'
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist }
  })
);

export const updatePlaylist = playlist => (
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  })
);

export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);

// TODO
// export const searchPlaylists = title => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/playlist_searches',
//     data: { search: { title } }
//   })
// );

// export const recentPlaylists = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/users/recent_playlists'
//   })
// );
