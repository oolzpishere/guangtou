import Swiper from 'swiper/bundle';
import videojs from  "video.js"

import { TalentsSwiper } from 'src/talents_swiper.js'
import { Videos } from 'src/videos.js'


$(document).on("turbolinks:load", function() {

  if ( $('#parties-navigator-xcl_excellence-talents-page').length ) {

    // var videos = {}
    var videos = new Videos;

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

      // videos[ name ] = player
      videos.addVideo(name, player)
    });

    new TalentsSwiper( videos )
    // , .vjs-volume-panel, .vjs-play-progress
    $('.video-js').on('mousemove touchmove', function(event){
      console.log(event)
      // console.log('stop touch move bubbling');
      return false
    })

    // $('.vjs-volume-panel ').on('touchmove', function(event){
    //   console.log(this)
    //   console.log('stop touch move bubbling');
    //   event.stopPropagation();
    //   // return false
    // })

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
