
import videojs from  "video.js"
// "main": "./dist/video.cjs.js",


$(document).on("turbolinks:load", function() {

  if ( $('#nnl-video').length > 0 ) {
      var nnl_player = videojs('nnl-video', {
        controls: true,
        autoplay: false,
        preload: 'auto'
      });
  }

  if ( $('#gt-profile-video').length > 0 ) {
      var nnl_player = videojs('gt-profile-video', {
        controls: true,
        autoplay: false,
        preload: 'auto'
      });
  }

    // if ( $('.nnl-profile-video-cover').length > 0 ) {
    //   var nnl_player = videojs('nnl-video', {
    //     controls: true,
    //     autoplay: false,
    //     preload: 'auto'
    //   });
    //
    //   $('.nnl-profile-video-cover').on('click', function(){
    //     $('#nnl-video-wrap').removeClass('d-none');
    //     nnl_player.play();
    //   })
    //
    //   $('.close-nnl-video').on('click', function(){
    //     nnl_player.pause();
    //     $('#nnl-video-wrap').addClass('d-none');
    //   })
    // }

    // if ( $('.gt-profile-video-cover').length > 0 ) {
    //   var gt_player = videojs('gt-profile-video', {
    //     controls: true,
    //     autoplay: false,
    //     preload: 'auto'
    //   });
    //
    //   $('.gt-profile-video-cover').on('click', function(){
    //     $('#gt-video-wrap').removeClass('d-none');
    //     gt_player.play();
    //   })
    //
    //   $('.close-nnl-video').on('click', function(){
    //     gt_player.pause();
    //     $('#gt-video-wrap').addClass('d-none');
    //   })
    // }

    if ( $('.strategy-video-cover').length > 0 ) {
      var strategy_player = videojs('strategy-video', {
        controls: true,
        autoplay: false,
        preload: 'auto'
      });

      $('.strategy-video-cover').on('click', function(){
        $('#strategy-video-wrap').removeClass('d-none');
        strategy_player.play();
      })

      $('.close-video').on('click', function(){
        strategy_player.pause();
        $('#strategy-video-wrap').addClass('d-none');
      })
    }

    if ( $('#brand-video').length > 0 ) {
      videojs('brand-video', {
        controls: true,
        autoplay: false,
      });
    }


    // player.on('touchstart', function(){
    //   // this.controlBar.show();
    //   // player.requestFullscreen();
    //   // player.trigger('click');
    //   // $('#nnl-video').click();
    //   if (player.paused() === true) {
    //     player.play();
    //
    //   } else {
    //     player.pause();
    //   }
    //   // player.userActive(true);
    // });

    // $('.vjs-tech').on('touchstart', function(){
    //   if (player.paused() === true) {
    //     player.play();
    //
    //   } else {
    //     player.pause();
    //   }
    // })

});


// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {
  // dispose videojs, when leave page.
  if ( $('.video-js').length > 0 ) {
    // videojs('nnl-video').dispose();
    videojs( document.querySelector('.video-js') ).dispose();
  }

})
