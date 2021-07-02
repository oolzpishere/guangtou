# local server note

00:00 puma:systemd:config
      01 #<StringIO:0x00007ffbab2ff1d0> /tmp/puma_guangtou_production.service
      02 sudo mv /tmp/puma_guangtou_production.service /etc/systemd/system/
      03 sudo /bin/systemctl daemon-reload

00:00 puma:config
      01 #<StringIO:0x00007fbeba2c0f58> /data/www/rails/guangtou/shared/puma_production.rb

00:00 puma:nginx_config
      01 #<StringIO:0x00007fa742aa4178> /tmp/nginx_guangtou_production
      02 sudo mv /tmp/nginx_guangtou_production /etc/nginx/sites-available/guangtou_production
      03 sudo ln -fs /etc/nginx/sites-available/guangtou_production /etc/nginx/sites-enabled/guangtou_production

# local server setting:
```
mkdir app_root/shared/tmp/sockets app_root/shared/tmp/pids
```

puma:nginx_config:
```
sudo mv /tmp/nginx_guangtou_production /etc/nginx/sites-available/guangtou_local_production
sudo ln -fs /etc/nginx/sites-available/guangtou_local_production /etc/nginx/sites-enabled/guangtou_local_production
```

puma:systemd:config:
```
<!-- enable to launch at startup -->
sudo systemctl enable puma_guangtou_local_production.service
```

after config, need to bundle and rails webpacker:clobber and webpacker:compile
