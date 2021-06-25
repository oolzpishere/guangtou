# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# guangtou

dev local production:
rails webpacker:compile
RAILS_SERVE_STATIC_FILES=true rails s -e production -b 0.0.0.0

## animate:
https://github.com/animate-css/animate.css
https://github.com/bfintal/Counter-Up2

### animate-not-use:
https://github.com/inorganik/countUp.js

### page animate:
https://github.com/swup/swup
https://github.com/barbajs/barba

### video:
--use:
https://stackoverflow.com/questions/13384276/videojs-keep-controls-visible
--not yet:
https://github.com/videojs/video.js
https://github.com/videojs/themes
https://codepen.io/benjipott/pen/JELELN

### tools:
--gradient-backgrounds generater:
https://cssgradient.io/gradient-backgrounds/
--box-shadow
https://cssgenerator.org/box-shadow-css-generator.html

### issues:
-webpacker image not load:
https://github.com/rails/webpacker/issues/2144
https://github.com/rails/webpacker/issues/2956

https://github.com/turbolinks/turbolinks/issues/293
--rbenv: For Ubuntu Desktop:
In Ubuntu ~/.bash_profile is only sourced by bash when started in interactive login mode. That is typically only when you login at the console (Ctrl+Alt+F1..F6), or connecting via ssh. This issue is explained in detail here.

$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.profile

--yarn in ubuntu desktop: after npm install -g yarn, yarn not found, relogin, then yarn could found.
https://blog.csdn.net/qq_40132161/article/details/103697245
https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string

--videojs: Note: Do not use both data-setup and an options object.
videojs('my-player', {
  controls: true,
  autoplay: false,
  preload: 'auto'
});
Note: Do not use both data-setup and an options object.
--
https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string

### server:
https://askubuntu.com/questions/178970/i-need-to-reset-my-computers-ip-address-to-dhcp-from-static
https://www.howtogeek.com/howto/ubuntu/change-ubuntu-server-from-dhcp-to-a-static-ip-address/
https://linuxhint.com/change-from-dhcp-to-static-ip-address-ubuntu/
How to disable auto sleep in Ubuntu 18.04:
https://askubuntu.com/questions/1062369/how-to-disable-auto-sleep-in-ubuntu-18-04
https://askubuntu.com/questions/972169/ubuntu-17-10-and-later-dont-suspend-when-lid-is-closed-just-lock-screen
https://blog.csdn.net/wang1127248268/article/details/88037724
https://www.mobibrw.com/2020/27398
http://www.vassox.com/linux-general/ubuntu/disabling-ubuntu-suspend-power-management-features-from-the-command-line/
#### ssh
ssh to desktop
https://linuxconfig.org/how-to-open-ssh-port-22-on-ubuntu-20-04-focal-fossa-linux

atom snippets:
https://flight-manual.atom.io/using-atom/sections/snippets/

node install:
https://github.com/nodesource/distributions/blob/master/README.md

y:
bjUoQbSJDJs
