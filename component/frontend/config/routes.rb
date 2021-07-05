Frontend::Engine.routes.draw do

  resources :corp_infos
  get '/home', to: 'corp_infos#home'

  get '/corp_all', to: 'corp_infos#corp_all'

  get '/profile', to: 'corp_infos#profile'
  get '/profile/profile_xcl', to: 'corp_infos#profile_xcl'
  get '/profile/profile_gt', to: 'corp_infos#profile_gt'

  get '/culture', to: 'corp_infos#culture'
  get '/culture_gt', to: 'corp_infos#culture_gt'
  get '/culture_xcl', to: 'corp_infos#culture_xcl'

  get '/strategy', to: 'corp_infos#strategy'

  get '/sync', to: 'corp_infos#sync'



  get '/parties', to: 'parties#index'
  get '/parties/profile', to: 'parties#profile'
  get '/parties/brand', to: 'parties#brand'
  get '/parties/brand/detail', to: 'parties#brand_detail'

  get '/parties/video', to: 'parties#video'
  get '/parties/lead', to: 'parties#lead'
  get '/parties/society', to: 'parties#society'
  get '/parties/service', to: 'parties#service'
  get '/parties/honor', to: 'parties#honor'

  # resources :businesses
  get '/businesses', to: 'businesses#index'
  get '/businesses/space', to: 'businesses#space'
  get '/businesses/space_details', to: 'businesses#space_details'


  # resources :advantages
  get '/advantages', to: 'advantages#index'


end
