Rails.application.routes.draw do
<<<<<<< HEAD
=======

>>>>>>> dbb5e12b72b15ade20a1fe430f9d5239bb0f531a
  root "welcome#index"

  get '/search', :to => 'reservations#home'

  get '/flights/new', :to => 'flights#home'

  get 'session/new'


  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

  get "/login" => 'session#new', :as => 'login'
  post "/login" => 'session#create'
  delete "/logout" => 'session#destroy', :as => 'logout'

  get '/planes/airbus' => 'airplanes#airbus300', :as => 'airbus'
  get '/planes/privatejet' => 'airplanes#privateJet', :as => 'privatejet'
  get '/planes/boeing747' => 'airplanes#boeing747', :as => 'boeing747'


end
