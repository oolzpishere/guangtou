#!/usr/bin/env puma

directory '/data/www/rails/guangtou/current'
rackup "/data/www/rails/guangtou/current/config.ru"
environment 'production'

tag ''

pidfile "/data/www/rails/guangtou/shared/tmp/pids/puma.pid"
state_path "/data/www/rails/guangtou/shared/tmp/pids/puma.state"
stdout_redirect '/data/www/rails/guangtou/shared/log/puma_access.log', '/data/www/rails/guangtou/shared/log/puma_error.log', true


threads 0,16



bind 'unix:///data/www/rails/guangtou/shared/tmp/sockets/puma_production.sock'

workers 0




restart_command 'bundle exec puma'

prune_bundler


on_restart do
  puts 'Refreshing Gemfile'
  ENV["BUNDLE_GEMFILE"] = ""
end
