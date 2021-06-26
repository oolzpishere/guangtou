
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap/dist/gsap.js'
// import counterUp from 'counterup2'
import {Flips} from "./flips"

$(document).on("turbolinks:load", function() {
// document.addEventListener("DOMContentLoaded", function(event) {
  var wHeight = window.innerHeight;
  $('.window-holder').css("height", wHeight)



    function startCount(target_item) {
      let flips = new Flips();
      flips.beginToCount(target_item);
    }

    var corp_all_swiper_tl = gsap.timeline(); //create the timeline
    function my_clear_tl(tl) {
      tl.seek('end');
      tl.clear();
    }

    var corp_all_swiper_tls = [
      function(){
        corp_all_swiper_tl.from(".corp-index-swiper-title", {y: -500, opacity: 0, duration: 1, ease: "elastic", })
          .from(".corp-index-swiper-num", {y: -500, opacity: 0, duration: 1, onComplete: function(){startCount('.corp_all_counter')} })
      },
      function(){
        corp_all_swiper_tl.from(".corp-index-swiper-title", {y: -500, opacity: 0, duration: 1, ease: "elastic", })
          .from(".corp-index-swiper-num", {y: -500, opacity: 0, duration: 1, onComplete: function(){startCount('.corp_all_counter')} })
      },
      function(){
        corp_all_swiper_tl.from(".title-slide-in", {y: -500, opacity: 0, duration: 1, ease: "elastic", })
          .from(".flag-flip", {rotationX:-90, transformOrigin:"top", duration: 1 })

      },
      function(){
        corp_all_swiper_tl.from(".title-slide-in", {y: -1200, opacity: 0, duration: 1, ease: "elastic", })
      },
      function(){
        corp_all_swiper_tl.from(".title-slide-in", {y: -500, opacity: 0, duration: 1, ease: "elastic", })
          .from(".flag-flip", {rotationX:-90, transformOrigin:"top", duration: 1 })
      }
    ]

    var corpAllSwiper = new Swiper(".corpAllSwiper", {
            direction: "vertical",
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              type: 'bullets',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
            },
            on: {
              init: function () {
                corp_all_swiper_tls[0]();
              },
            }
          });

    corpAllSwiper.on('slideChange', function () {
      // corpLinksSwiper.slideTo(swiper.realIndex)
      console.log(corpAllSwiper.realIndex);
      my_clear_tl(corp_all_swiper_tl)
      // animation have to call at current page.
      corp_all_swiper_tls[corpAllSwiper.realIndex]();
    });

    // swiper.on('slideResetTransitionEnd', function () {
    //   // corpLinksSwiper.slideTo(swiper.realIndex, speed, runCallbacks)
    //
    //   corp_all_swiper_tls[swiper.realIndex]()
    // });

    var corpAllSwiper = new Swiper(".partyIndexSwiper", {
            loop: true,
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


})
