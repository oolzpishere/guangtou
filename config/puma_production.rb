#!/usr/bin/env puma
#
# directory '/var/www/rails/qianyan_new/current'
# rackup "/var/www/rails/qianyan_new/current/config.ru"
environment 'production'

tag ''

# pidfile "/var/www/rails/qianyan_new/shared/tmp/pids/puma.pid"
pidfile ENV.fetch("PIDFILE") { "tmp/pids/production_server.pid" }

# state_path "/var/www/rails/qianyan_new/shared/tmp/pids/puma.state"
# stdout_redirect '/var/www/rails/qianyan_new/shared/log/puma_access.log', '/var/www/rails/qianyan_new/shared/log/puma_error.log', true


threads 0,16



# bind 'unix:///var/www/rails/qianyan_new/shared/tmp/sockets/puma_production.sock'

# workers 0




restart_command 'bundle exec puma'


prune_bundler


on_restart do
  puts 'Refreshing Gemfile'
  ENV["BUNDLE_GEMFILE"] = ""
end
