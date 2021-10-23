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
            noSwipingClass: 'video-js',
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
    _this.disposeWhenChangePage()
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
    _this.stopSwiper()

    _this._interval = setInterval( function() {
      // video on play
      console.log( 'playing ' +  _this.anyVideoPlaying() )
      if ( _this.anyVideoPlaying() ) {
        // skip
      } else {
        // clear interval
        clearInterval(_this._interval)
        _this.swiper.autoplay.start();

      }
    }, _this._intervalForRestartTime )

  }

  stopSwiper(){
    var _this = this
    _this.swiper.autoplay.stop();

    if ( _this._interval ) {
      clearInterval(_this._interval)
    }
  }

  anyVideoPlaying(){
    var _this = this
    if ( _this._videos ) {
      return _this._videos.anyVideoPlaying()
    } else {
      return false
    }
  }

  disposeWhenChangePage(){
    var _this = this
    $(document).one("turbolinks:before-cache", function() {
      console.log('turbolinks:before-cache stopTimer ');
      _this.stopSwiper()
    })
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
