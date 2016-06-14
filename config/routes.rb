Rails.application.routes.draw do
  root 'pages#index'


  resources :reservations
  resources :flights
  resources :airplanes
  resources :users

end
