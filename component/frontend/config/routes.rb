Frontend::Engine.routes.draw do
  resources :corp_infos
  get '/profile', to: 'corp_infos#profile'
end
