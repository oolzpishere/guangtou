import '../application'
import './swipers'
import './flips'


import 'slick-carousel/slick/slick'

// import barba from '@barba/core'
import { gsap } from 'gsap/dist/gsap.js'
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

  // gsap.from(".my-show-up", {rotation: 27, x: 100, duration: 1});
  // gsap.from(".my-show-down", { y: -600, duration: 1});




  if ( $('.nnl-profile-video-img').length > 0 ) {
    $('.nnl-profile-video-img').on('click', function(){
      console.log('clicked')
    })
  }

  // var player = videojs('nnl-video');

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


})
