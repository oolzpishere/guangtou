import '../application'

import 'slick-carousel/slick/slick'

// import barba from '@barba/core'
import { gsap } from 'gsap/dist/gsap.js'
import 'animejs/lib/anime.js'
import Chart from 'chart.js/auto';
import 'jquery.scrollto'
import * as echarts from 'echarts'
import 'src/echarts/world'


import './swipers'
import './flips'
import './my_vjs'
import './tl_scroll'
import 'src/echarts/businesses_echarts'
import {Flips} from "./flips"


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

  if ( $('.industry-index-page').length > 0 ) {
    $('.point-container').on('click', function(){
      var item = $(this).parents('.industry-point-container')
      if (item.hasClass('active')) {
        item.removeClass('active')
      } else {
        item.addClass('active')
      }

    })

    $('.show-all-point-container').on('click', function(){
      var item = $(this)
      if (item.hasClass('active')) {
        item.removeClass('active')
        $('.industry-point-container').removeClass('active')
      } else {
        item.addClass('active')
        $('.industry-point-container').addClass('active')
      }
    })
  }


  if ( $('.culture-left').length > 0 ) {
    // delay: 0.2
    var left_tl = gsap.timeline({ });
    var right_tl = gsap.timeline({ });

    $('.culture-left img').each(function( index ) {
      var _self = $( this )
      left_tl.from( _self, { y: -500,opacity: 0 }, ">");
    });

    $('.culture-right img').each(function( index ) {
      var _self = $( this )
      right_tl.from( _self, {y: -500, opacity: 0 }, ">");
    });
  }

  if ( $('.mcount-up').length > 0 ) {
    let flips = new Flips();
    flips.beginToCount( $('.mcount-up'), 200);
  }


  const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  if ($('.mfadeInLeft').length > 0) {
    // animateCSS('.mfadeInLeft', 'fadeInLeft');
    // animateCSS('.mfadeInRight', 'fadeInRight');
     // ease: "elastic"
    gsap.from('.mfadeInLeft', {x: -500, opacity: 0, duration: 1, delay: 0.2} )
    gsap.from('.mfadeInRight', {x: 500, opacity: 0, duration: 1, delay: 0.2} )

    // $('.mfadeInLeft')
  }



})

// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {

  // if ( $('.page-transition').length > 0 ) {
  //   $('.page-transition').removeClass('animate__animated animate__fadeIn');
  // }

})
