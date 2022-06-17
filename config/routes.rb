Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
 
 
  resources :comments
  patch '/usercards/:id', to: 'cards#update'
  post '/usercards', to: 'cards#create'
  get '/usercards/', to: 'cards#index'
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  post '/comment', to:  'comments#create'
  get '/comments', to: 'comments#index'
  get "/me", to: "users#show"
  
  delete "/logout", to: "sessions#destroy"
  delete '/usercards/:id', to:'cards#destroy'
end
