Frontend::Engine.routes.draw do

  # resources :corp_infos
  root to: 'corp_infos#home'
  get '/home', to: 'corp_infos#home'

  # get '/corp_all', to: 'corp_infos#corp_all'
  get '/corp_infos', to: 'corp_infos#index'

  get '/corp_infos/profile', to: 'corp_infos#profile'
  get '/corp_infos/profile/profile_xcl', to: 'corp_infos#profile_xcl'
  get '/corp_infos/profile/profile_gt', to: 'corp_infos#profile_gt'

  get '/corp_infos/culture', to: 'corp_infos#culture'
  get '/corp_infos/culture/gt', to: 'corp_infos#culture_gt'
  get '/corp_infos/culture/xcl', to: 'corp_infos#culture_xcl'

  get '/corp_infos/strategy', to: 'corp_infos#strategy'
  get '/corp_infos/strategy/gt', to: 'corp_infos#strategy_gt'
  get '/corp_infos/strategy/xcl', to: 'corp_infos#strategy_xcl'


  get '/corp_infos/industry', to: 'corp_infos#industry'
  get '/corp_infos/industry/liuzhou', to: 'corp_infos#industry_liuzhou'
  get '/corp_infos/industry/hezhou', to: 'corp_infos#industry_hezhou'
  get '/corp_infos/industry/nanning', to: 'corp_infos#industry_nanning'
  get '/corp_infos/industry/laibin', to: 'corp_infos#industry_laibin'
  get '/corp_infos/industry/xinjiang', to: 'corp_infos#industry_xinjiang'


  get '/parties', to: 'parties#index'
  get '/parties/navigator', to: 'parties#navigator'

  get '/parties/profile', to: 'parties#profile'
  get '/parties/brand', to: 'parties#brand'
  get '/parties/brand/detail', to: 'parties#brand_detail'

  get '/parties/video', to: 'parties#video'
  get '/parties/lead', to: 'parties#lead'
  get '/parties/society', to: 'parties#society'
  get '/parties/service', to: 'parties#service'
  get '/parties/honor', to: 'parties#honor'
  get '/parties/navigator/xcl_pilot', to: 'parties#navigator_xcl_pilot'
  get '/parties/navigator/xcl_fortress', to: 'parties#navigator_xcl_fortress'
  get '/parties/navigator/xcl_pioneer', to: 'parties#navigator_xcl_pioneer'
  get '/parties/navigator/xcl_excellence', to: 'parties#navigator_xcl_excellence'

  # resources :businesses
  get '/businesses', to: 'businesses#index'
  get '/businesses/space', to: 'businesses#space'
  get '/businesses/space/details', to: 'businesses#space_details'
  get '/businesses/car', to: 'businesses#car'
  get '/businesses/car/details', to: 'businesses#car_details'
  get '/businesses/ship', to: 'businesses#ship'
  get '/businesses/ship/details', to: 'businesses#ship_details'
  get '/businesses/train', to: 'businesses#train'
  get '/businesses/train/details', to: 'businesses#train_details'
  get '/businesses/electronic', to: 'businesses#electronic'
  get '/businesses/electronic/details', to: 'businesses#electronic_details'
  get '/businesses/capacitor', to: 'businesses#capacitor'


  # resources :advantages
  get '/advantages', to: 'advantages#index'
  get '/advantages/team', to: 'advantages#team'
  # get '/advantages/innovation_result', to: 'advantages#innovation_result'
  get '/advantages/innovation_achievement', to: 'advantages#innovation_achievement'
  get '/advantages/innovation_achievement/more', to: 'advantages#innovation_achievement_more'
  get '/advantages/innovation_construction', to: 'advantages#innovation_construction'
  get '/advantages/innovation_construction/more', to: 'advantages#innovation_construction_more'

  get '/advantages/innovation_tl', to: 'advantages#innovation_tl'
  get '/advantages/equipment', to: 'advantages#equipment'


end
