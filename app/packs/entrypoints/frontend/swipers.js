
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap/dist/gsap.js'
// import counterUp from 'counterup2'
import {Flips} from "./flips"

$(document).on("turbolinks:load", function() {
// document.addEventListener("DOMContentLoaded", function(event) {
  var wHeight = window.innerHeight;
  $('.window-holder').css("height", wHeight)

  var swiper = new Swiper(".mySwiper", {
          direction: "vertical",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
          },
        });

    var corpLinksSwiper = new Swiper(".corp-links-swiper", {
      // direction: "vertical",
      // loop: true,
      allowTouchMove: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // cubeEffect: {
      //   slideShadows: false,
      // }
    });

    function startCount() {
      var flips = new Flips();
      flips.beginToCount();
    }

    var corp_all_swiper_tls = [
      function(){
        let corp_all_swiper1_tl = gsap.timeline(); //create the timeline
        corp_all_swiper1_tl.from(".corp-index-swiper-title", {y: -600, duration: 1, ease: "elastic", })
          .from(".corp-index-swiper-num", {y: -600, duration: 1, onComplete: startCount })
      },
      function(){},
      function(){},
      function(){}
    ]

    swiper.on('slideChange', function () {
      // corpLinksSwiper.slideTo(swiper.realIndex, speed, runCallbacks)
      corpLinksSwiper.slideTo(swiper.realIndex)
      console.log(swiper.realIndex);
      // animation have to call at current page.
      corp_all_swiper_tls[swiper.realIndex]();


    });

    // swiper.on('slideResetTransitionEnd', function () {
    //   // corpLinksSwiper.slideTo(swiper.realIndex, speed, runCallbacks)
    //
    //   corp_all_swiper_tls[swiper.realIndex]()
    // });









})
