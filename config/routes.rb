Rails.application.routes.draw do
  root "reservations#home"

  get '/flights/new', :to => 'flights#home'

  get 'session/new'


  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

  get "/login" => 'session#new', :as => 'login'
  post "/login" => 'session#create'
  delete "/logout" => 'session#destroy', :as => 'logout'


end
