
import videojs from  "video.js"
// import "videojs-background/lib/videojs-Background.js"

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

  if ( $('.strategy-video-cover').length > 0 ) {
    var strategy_player = videojs('strategy-video', {
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

    var mButton = videojs.getComponent('closeButton');
    var button = new mButton(strategy_player, {

    });
    button.addClass('my-video-close-btn')

    // debugger;
    // strategy_player.controlBar.el().prepend( button.el() )
    strategy_player.controlBar.addChild(button, {}, 0)

    // .childNodes[0]
    // strategy_player.controlBar.el().addChild( button);

    $('.strategy-video-cover').on('click', function(){
      $('#strategy-video-wrap').removeClass('d-none');
      strategy_player.play();
    })

    $('.my-video-close-btn').on('click touchstart mouseenter', function(){
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

  if ( $('#industry-liuzhou-video').length > 0 ) {
    videojs('industry-liuzhou-video', {
      // controls: false,
      autoplay: true,
      muted: true,
    })

  }

  if ( $('#industry-hezhou-video').length > 0 ) {
    videojs('industry-hezhou-video', {
      // controls: false,
      autoplay: true,
      muted: true,
    })

  }

  if ( $('#industry-laibin-video').length > 0 ) {
    videojs('industry-laibin-video', {
      // controls: false,
      autoplay: true,
      muted: true,
    })

  }

  if ( $('#industry-nanning-nnl-video').length > 0 ) {
    videojs('industry-nanning-nnl-video', {
      autoplay: true,
      muted: true
    })

    videojs('industry-nanning-guomao-video', {
      autoplay: true,
      muted: true
    })

  }

});


// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {
  // dispose videojs, when leave page.
  if ( $('.video-js').length > 0 ) {
    // videojs('nnl-video').dispose();
    var videos = document.querySelectorAll(".video-js");
    videos.forEach(function(video) {
      videojs( video ).dispose();
    });

  }

})



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

// strategy_player.on('pause', function() {
//   this.bigPlayButton.show();
//   console.log('pause');
//   // Now the issue is that we need to hide it again if we start playing
//   // So every time we do this, we can create a one-time listener for play events.
//   strategy_player.one('play', function() {
//     this.bigPlayButton.hide();
//   });
// });

// $('.my-close-btn').on('click touchstart mouseenter', function(){
//   console.log('on Clicked2');
//   videojs.log('Clicked');
//
// })

// button.on('click touchstart mouseenter', function(){
//   console.log('on Clicked');
//   videojs.log('Clicked');
//
// })
// button.trigger('click ');



// strategy_player.bigPlayButton.show();
// strategy_player.bigPlayButton.show();

// clickHandler: function(event) {
//   // videojs.log('Clicked');
//   console.log('Clicked');
//
// }
