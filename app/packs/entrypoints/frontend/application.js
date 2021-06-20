import '../application'

import 'slick-carousel/slick/slick'
// import barba from '@barba/core'

import 'gsap/dist/gsap.js'
import 'animejs/lib/anime.js'

import "video.js"
// "main": "./dist/video.cjs.js",

$(document).on("turbolinks:load", function() {
// $(document).on("load", function() {

  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
  });



})
