import Swiper from 'swiper/bundle';


export {  TalentsSwiper };

class TalentsSwiper {
  constructor( videos = undefined ) {
    this._autoplayDelayTime = 10000
    this._intervalForRestartTime = 15000
    this.initSwiper()

    if (videos) {
      this._videos = videos
    }

  }

  initSwiper(){
    var _this = this
    _this.swiper = new Swiper(".talents-swiper", {
            slidesPerView: "auto",
            freeMode: true,
            autoplay: {
              delay: _this._autoplayDelayTime,
            },
            navigation: {
              nextEl: '.my-swiper-button-next',
              prevEl: '.my-swiper-button-prev',
            },
            // loop: true,
          });

    _this.initExpandSlideDetail()

    $('.talents-swiper, .my-swiper-navigation-container').on('touchstart', function(){

      _this.intervalForRestart()
      // return false
    })

    // talentsSwiper.on('slideChange', function(){
    //   countdownForRestart()
    // })

  }

  initExpandSlideDetail() {
    var _this = this

    $('.talent-slide-with-detail').find('.talent-img').on('click', function(){
      var $slide = $(this).parents('.talent-slide-with-detail')
      if ( $slide.hasClass('expanded') ) {
        $slide.removeClass('expanded');
      } else {
        $slide.addClass('expanded');
      }
      _this.swiper.update();
    })
  }

  intervalForRestart(){
    console.log('intervalForRestart');

    var _this = this
    _this.swiper.autoplay.stop();

    if ( _this._interval ) {
      clearInterval(_this._interval)
    }

    _this._interval = setInterval( function() {
      // video on play
      console.log( 'playing ' +  _this.videoPlaying() )
      if ( _this.videoPlaying() ) {
        // skip
      } else {
        // clear interval
        clearInterval(_this._interval)
        _this.swiper.autoplay.start();

      }
    }, _this._intervalForRestartTime )

  }

  videoPlaying(){
    var _this = this
    if ( typeof(_this._videos) != 'undefined' && _this.anyVideoPlaying() ) {
      return true
    }
  }

  anyVideoPlaying(){
    var _this = this
    for(var key in _this._videos) {
      if ( !_this._videos[key].paused() ) {
        return true
      }
    }
    // this._videos.forEach((video, i) => {
    //   if (video.playing) {
    //     return true
    //   }
    // });

  }



}

// function talentsSwiperRealCountDown(){
//   // console.log('first:' + talentsSwiper.autoplay.running)
//   talentsSwiper.autoplay.stop();
//
//   clearTimeout(_this._autoplayTimeout)
//   // 15 + 15 second to slide next.
//   _this._autoplayTimeout = setTimeout( function() {
//     talentsSwiper.autoplay.start();
//   }, 15000);
// }
