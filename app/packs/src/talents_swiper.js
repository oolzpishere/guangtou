import Swiper from 'swiper/bundle';


export {  TalentsSwiper };

class TalentsSwiper {
  constructor( ) {
    this._autoplayDelayTime = 15000
    this._countdownForRestartTime = 20000
    this.initSwiper()

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

      _this.countdownForRestart()
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

  countdownForRestart(){
    console.log('countdownForRestart');
    var _this = this
    _this.swiper.autoplay.stop();

    if ( _this._autoplayTimeout ) {
      clearTimeout(_this._autoplayTimeout)
    }

    _this._autoplayTimeout = setTimeout( function() {
      _this.swiper.autoplay.start();
    }, _this._countdownForRestartTime );
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
