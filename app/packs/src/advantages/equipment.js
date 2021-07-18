import videojs from  "video.js"
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap/dist/gsap.js'

$(document).on("turbolinks:load", function() {

  if ( $('#advantages-equipment-page').length ) {
    videojs('equipment1-video', {
      autoplay: true,
      muted: true,
      preload: 'auto'
    });

    videojs('equipment2-video', {
      autoplay: true,
      muted: true,
    });

    videojs('equipment3-video', {
      autoplay: true,
      muted: true,
    });

    videojs('equipment4-video', {
      autoplay: true,
      muted: true,
    });

    videojs('equipment5-video', {
      autoplay: true,
      muted: true,
    });

    videojs('equipment6-video', {
      autoplay: true,
      muted: true,
    });

    videojs('equipment7-video', {
      autoplay: true,
      muted: true,
    });

    videojs('equipment8-video', {
      autoplay: true,
      muted: true,
    });

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
                setSlideIn( $('.swiper-slide-active') )
              }
            }
          });
    // setSlideIn( $('.swiper-slide').not('.swiper-slide-duplicate').eq(0) )

    function setSlideIn( slide ){
      // $('.swiper-slide-active').find('.slide-in-left')
      equipmentTl.from( slide.find('.slide-in-left'), { x: -600, opacity: 0, duration: 1, delay: 0.2 });
      equipmentTl.from( slide.find('.slide-in-right'), { x: 600, opacity: 0, duration: 1 });
    }

    equipmentSwiper.on('slideChangeTransitionStart', function () {
      my_clear_tl(equipmentTl)
      // equipmentSwiper.realIndex
      setSlideIn( $('.swiper-slide-active') )
    });



    function my_clear_tl(tl) {
      tl.seek('end');
      tl.clear();
    }


  }

})
