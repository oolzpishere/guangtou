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




  if ( $('.nnl-profile-video-cover').length > 0 ) {
    var nnl_player = videojs('nnl-video');

    $('.nnl-profile-video-cover').on('click', function(){
      $('#nnl-video-wrap').removeClass('d-none');
      nnl_player.play();
    })

    $('.close-nnl-video').on('click', function(){
      nnl_player.pause();
      $('#nnl-video-wrap').addClass('d-none');
    })
  }

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
