Frontend::Engine.routes.draw do

  resources :corp_infos
  get '/home', to: 'corp_infos#home'

  get '/corp_all', to: 'corp_infos#corp_all'

  get '/profile', to: 'corp_infos#profile'
  get '/profile/profile_nnl', to: 'corp_infos#profile_nnl'
  get '/profile/profile_gt', to: 'corp_infos#profile_gt'

  get '/culture', to: 'corp_infos#culture'
  get '/culture_gt', to: 'corp_infos#culture_gt'
  get '/culture_xcl', to: 'corp_infos#culture_xcl'

  get '/strategy', to: 'corp_infos#strategy'

  get '/sync', to: 'corp_infos#sync'



  resources :parties

end
