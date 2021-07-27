// import Swiper from 'swiper/bundle';
import videojs from  "video.js"
import {AllVideos} from "src/all_videos.js"

// import "videojs-background/lib/videojs-Background.js"

// "main": "./dist/video.cjs.js",


$(document).on("turbolinks:load", function() {

  if ( $('#parties-video-page').length > 0 ) {
    var allVideos = new AllVideos

    $('.video-tag').first().addClass('active')
    $('.video-content-container').first().addClass('active')

    $('.video-tag').on('click', function(){
      $('.video-tag').removeClass('active')
      $(this).addClass('active')

      allVideos.pauseAllVideos()
      $('.video-content-container').removeClass('active')

      let name = $(this).data('name')
      filterItemsByKey( $('.video-content-container'), 'name', name).addClass('active')
      allVideos.videos[name].play()
    })

    function filterItemsByKey( items, key, value ){
      var item = items.filter( function() {
        return $(this).data(key) == value;
      });
      return item
    }


  }



});


// var xcl_player = videojs('party-xcl-video', {
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
// var nnl_player = videojs('party-nnl-video', {
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
