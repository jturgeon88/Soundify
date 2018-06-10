Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :playlists, only: [:create, :show, :destroy]
    resources :songs, only: [:index]
    resources :playlist_adds, only: [:new, :create, :edit, :update, :show, :index, :destroy]
    resources :artists, only: [:show, :index]
  end

  root "static_pages#root"
end
