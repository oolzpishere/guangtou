import Swiper from 'swiper/bundle';
import videojs from  "video.js"
// import "videojs-background/lib/videojs-Background.js"

// "main": "./dist/video.cjs.js",


$(document).on("turbolinks:load", function() {

  if ( $('#parties-page').length > 0 ) {

    var partyIndexSwiper = new Swiper(".partyIndexSwiper", {
            // loop: true,
            pagination: {
              el: ".swiper-pagination",
              type: 'bullets',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
            },
            on: {
              init: function () {
                // corp_all_swiper_tls[0]();
              },
            }
          });

      videojs('parties-bg-video1', {
        autoplay: true,
        muted: true,
      });

      videojs('parties-bg-video2', {
        autoplay: true,
        muted: true,
      });

      videojs('parties-bg-video3', {
        autoplay: true,
        muted: true,
      });
  }



});
