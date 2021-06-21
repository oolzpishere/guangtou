import '../application'
import './swipers'

import 'slick-carousel/slick/slick'

// import barba from '@barba/core'
import 'gsap/dist/gsap.js'
import 'animejs/lib/anime.js'

import videojs from  "video.js"
// "main": "./dist/video.cjs.js",

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



})
