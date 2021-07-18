import videojs from  "video.js"
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap/dist/gsap.js'

$(document).on("turbolinks:load", function() {

  if ( $('#advantages-equipment-page').length ) {
    var players = []
    var equipment1_video = videojs('equipment1-video', {
      // autoplay: true,
      muted: true,
      // preload: 'true'
    });
    players.push(equipment1_video)

    var equipment2_video = videojs('equipment2-video', {
      // autoplay: true,
      muted: true,
      // preload: 'true'
    });
    players.push(equipment2_video)


    var equipment3_video = videojs('equipment3-video', {
      // autoplay: true,
      muted: true,
    });
    players.push(equipment3_video)

    var equipment4_video = videojs('equipment4-video', {
      // autoplay: true,
      muted: true,
    });
    players.push(equipment4_video)

    var equipment5_video = videojs('equipment5-video', {
      // autoplay: true,
      muted: true,
    });
    players.push(equipment5_video)

    var equipment6_video = videojs('equipment6-video', {
      // autoplay: true,
      muted: true,
    });
    players.push(equipment6_video)

    var equipment7_video = videojs('equipment7-video', {
      // autoplay: true,
      muted: true,
    });
    players.push(equipment7_video)

    var equipment8_video = videojs('equipment8-video', {
      // autoplay: true,
      muted: true,
    });
    players.push(equipment8_video)

    // $('.equipment-swiper').length > 0
    var equipmentTl = gsap.timeline();
    var equipmentSwiper = new Swiper(".equipment-swiper", {
            // loop: true,
            navigation: {
              nextEl: '.my-swiper-button-next',
              prevEl: '.my-swiper-button-prev',
            },
            on: {
              init: function () {
                setSlideIn( $('.swiper-slide-active'), 0 )
              }
            }
          });
    // setSlideIn( $('.swiper-slide').not('.swiper-slide-duplicate').eq(0) )

    function setSlideIn( slide, realIndex ){
      // $('.swiper-slide-active').find('.slide-in-left')
      equipmentTl.from( slide.find('.slide-in-left'), { x: -600, opacity: 0, duration: 0.5, delay: 0.2 });
      equipmentTl.from( slide.find('.slide-in-right'), { x: 600, opacity: 0, duration: 0.5 , onComplete: function(){ playVideo( realIndex ) } });
    }

    equipmentSwiper.on('slideChangeTransitionStart', function () {
      my_clear_tl(equipmentTl)
      // equipmentSwiper.realIndex
      pauseAllVideos()
      setSlideIn( $('.swiper-slide-active'), equipmentSwiper.realIndex  )
    });

    function playVideo( realIndex ){
      players[realIndex].play()
    }

    function pauseAllVideos( ){
      players.forEach( (player, index) => {
        player.pause();
      });
    }

    function my_clear_tl(tl) {
      tl.seek('end');
      tl.clear();
    }


  }

})
