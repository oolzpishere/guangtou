import '../application'

import 'slick-carousel/slick/slick'

// import barba from '@barba/core'
import { gsap } from 'gsap/dist/gsap.js'
import 'animejs/lib/anime.js'
import Chart from 'chart.js/auto';
import 'jquery.scrollto'

import './swipers'
import './flips'
import './my_vjs'
// import './shortcuts'





$(document).on("turbolinks:load", function() {
  var wHeight = window.innerHeight;
  console.log(wHeight)
// document.addEventListener("DOMContentLoaded", function(event) {

  // $(".slider").slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   dots: true,
  //   arrows: true,
  // });

  // var auto_player = videojs('auto-video', {
  //   autoplay: 'muted',
  //   loop: true
  // });

  setWrapToFullHeight();
  // window.addEventListener('resize', setWindowSize);
  $(window).on('resize', setWrapToFullHeight)

  function setWrapToFullHeight() {
    // wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    if ( $('.body-wrap').height() < wHeight ) {
      $('.body-wrap').height(wHeight);
    }
  }

  if ( $('.window-holder').length > 0 ) {
    $('.window-holder').css("height", wHeight)
  }

  // gsap.from(".my-show-up", {rotation: 27, x: 100, duration: 1});
  // gsap.from(".my-show-down", { y: -600, duration: 1});

  // $('.page-transition').addClass('animate__animated animate__fadeIn');
  if ( $('.team-page').length > 0 ) {
    var tlCountDownTimer;
    timelineScrollToBottom();
    tlCircleCounter();
    $('.timeline-container').on('click', function(){
      $(this).stop();
      // refresh tl status
      $('.timeline-container').removeClass('touch-bottom');
      $('.timeline-container').removeClass('scrolling');
      refreshTlCountDownTimer();
    })
  }

  function timelineScrollToBottom(){
    $('.timeline-container').scrollTo("max", 10000, {
      fail: function(){
        console.log('fail: stop');
        setTlStopStatus()
        refreshTlCountDownTimer();
      },
      done: function(){
        console.log('done: touch-bottom');
        $('.timeline-container').addClass('touch-bottom');
        setTlStopStatus()
        refreshTlCountDownTimer();
      },
      always: function(){
      }
    })
  }

  // tl == timeline
  function tlCircleCounter(){
    tlCountDownTimer = setTimeout( function() {
      if ( $('.timeline-container').hasClass('scrolling') ) {
        // skip
        console.log('tl scrolling');
        tlCircleCounter();
      } else if ( $('.timeline-container').hasClass('touch-bottom') ) {
        console.log('tl touch-bottom');
        // scroll to top and remove class touch-bottom
        // only place to scrollToTop
        $('.timeline-container').removeClass('touch-bottom')
        setTlScrollingStatus();
        $('.timeline-container').scrollTo("0", 1000, {
          always: function(){
            setTlStopStatus();
            refreshTlCountDownTimer();
          }
        })
      } else {
        console.log('tl begin scroll');
        timelineScrollToBottom();
      }
    }, 15000);
  }

  function refreshTlCountDownTimer() {
    clearTimeout(tlCountDownTimer);
    tlCircleCounter()
  }

  function setTlStopStatus() {
    $('.timeline-container').removeClass('scrolling');
  }

  function setTlScrollingStatus() {
    $('.timeline-container').addClass('scrolling');
  }


})

// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {

  // if ( $('.page-transition').length > 0 ) {
  //   $('.page-transition').removeClass('animate__animated animate__fadeIn');
  // }

})

//
//
// if ( $('.team-page').length > 0 ) {
//
//   timelineScrollToBottom()
//   $('.timeline-container').on('click', function(){
//     $(this).stop();
//     clearTimeout(countDownTimer);
//     countDown();
//   })
// }
//
// var countDownTimer;
// function timelineScrollToBottom(){
//   $('.timeline-container').scrollTo("max", 10000, {
//     fail: function(){
//       console.log('fail, stop');
//       countDown()
//     },
//     done: function(){
//       // wait 30s then scroll to top
//       $('.timeline-container').addClass('touch-bottom')
//       $('.timeline-container').click();
//     },
//     always: function(){
//     }
//   })
// }
//
// function countDown(){
//   console.log('begin count down');
//   countDownTimer = setTimeout( function() {
//     if ( $('.timeline-container').hasClass('touch-bottom') ) {
//       // scroll to top and remove class touch-bottom
//       // only place to scrollToTop
//       $('.timeline-container').scrollTo("0", 1000)
//       $('.timeline-container').removeClass('touch-bottom')
//       countDown()
//     } else {
//       timelineScrollToBottom();
//     }
//   }, 15000);
// }
