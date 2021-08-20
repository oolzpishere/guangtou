import Swiper from 'swiper/bundle';
import videojs from  "video.js"

import { TalentsSwiper } from 'src/talents_swiper.js'

$(document).on("turbolinks:load", function() {

  if ( $('#parties-navigator-xcl_excellence-talents-page').length ) {

    var videos = {};

    ['cxy', 'ql', 'zx'].forEach(( name, i) => {
      var player = videojs('party-talent-' + name + '-video', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        controlBar: {
          'pictureInPictureToggle': false,
          volumePanel: {
            inline: true
          }
        }
      });

      videos[ name ] = player
    });

    new TalentsSwiper( videos )

  }
})

// var cxy_player = videojs('party-talent-cxy-video', {
//   controls: true,
//   autoplay: false,
//   preload: 'auto',
//   controlBar: {
//     'pictureInPictureToggle': false,
//     volumePanel: {
//       inline: true
//     }
//   }
// });
//
// var ql_player = videojs('party-talent-ql-video', {
//   controls: true,
//   autoplay: false,
//   preload: 'auto',
//   controlBar: {
//     'pictureInPictureToggle': false,
//     volumePanel: {
//       inline: true
//     }
//   }
// });
//
// var zx_player = videojs('party-talent-zx-video', {
//   controls: true,
//   autoplay: false,
//   preload: 'auto',
//   controlBar: {
//     'pictureInPictureToggle': false,
//     volumePanel: {
//       inline: true
//     }
//   }
// });
