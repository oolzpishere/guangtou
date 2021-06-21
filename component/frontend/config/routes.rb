Frontend::Engine.routes.draw do
  resources :corp_infos
  get '/home', to: 'corp_infos#home'

  get '/corp_all', to: 'corp_infos#corp_all'
  get '/profile', to: 'corp_infos#profile'
  get '/culture', to: 'corp_infos#culture'



end
