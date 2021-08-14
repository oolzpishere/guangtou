import '../application'

import 'slick-carousel/slick/slick'

// import barba from '@barba/core'
import { gsap } from 'gsap/dist/gsap.js'

import Chart from 'chart.js/auto';
import 'jquery.scrollto'
import * as echarts from 'echarts'
import 'src/echarts/world'
import 'jquery.scrollto'


import './swipers'
import './flips'
import './my_vjs'
import './tl_scroll'
import 'src/echarts/businesses_echarts'
import {Flips} from "./flips"
import "src/my_anime_css.js"

import "src/advantages/equipment.js"
import "src/parties/index.js"
import "src/parties/video.js"
import "src/parties/navigator.js"
import "src/parties/navigator/xcl_excellence/videos.js"
import "src/parties/navigator/nnl_brand.js"



import {MyTl} from "src/my_tl.js"
import {HScroll} from "src/scroll/h_scroll.js"
import {VScroll} from "src/scroll/v_scroll.js"
// import {HAutoScroll} from "src/scroll/h_auto_scroll.js"




// import 'src/corp_infos/industry/nanning'
// if (document.querySelectorAll("#corp_infos-industry-nanning").length) {
//   import('src/corp_infos/industry/nanning') // webpack will load this JS async
//
// }

// import './shortcuts'



$(document).on("turbolinks:load", function() {
  // disable right click except home-page.
  if ( $('#home-page').length == 0 ) {
    // document.addEventListener('contextmenu', event => event.preventDefault());
  }

  var wHeight = window.innerHeight;
  var wWidth = window.innerWidth;

  console.log(wHeight)

  if ( $('.window-holder').length > 0 ) {
    $('.window-holder').css("height", wHeight)
    $('.window-holder').css("width", wWidth)
  }

  // setWrapToFullHeight();
  // // window.addEventListener('resize', setWindowSize);
  // $(window).on('resize', setWrapToFullHeight)
  //
  // function setWrapToFullHeight() {
  //   // wWidth = window.innerWidth;
  //   wHeight = window.innerHeight;
  //   if ( $('.body-wrap').height() < wHeight ) {
  //     $('.body-wrap').height(wHeight);
  //   }
  // }


  // gsap.from(".my-show-up", {rotation: 27, x: 100, duration: 1});
  // gsap.from(".my-show-down", { y: -600, duration: 1});

  // $('.page-transition').addClass('animate__animated animate__fadeIn');

  if ( $('.industry-index-page').length ) {
    $('.point-container').on('click', function(){
      var item = $(this).parents('.industry-point-container')
      var id = $(this).data('id')
      // var detail_img = $(this)

      $('.industry-point-container').removeClass('active')
      $('.industry-detail-img-container').removeClass('active')

      item.addClass('active')
      filterItemsById( $('.industry-detail-img-container'), id).addClass('active')

    })

  }

  function filterItemsById( items, id ){
    var item = items.filter(function() {
      return $(this).data("id") == id;
    });
    return item
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
    flips.beginToCount( $('.mcount-up'), 150);
  }


  if ($('.mfadeInLeft').length > 0) {

     // ease: "elastic"
    gsap.from('.mfadeInLeft', {x: -500, opacity: 0, duration: 1, delay: 0.2} )
    gsap.from('.mfadeInRight', {x: 500, opacity: 0, duration: 1, delay: 0.2} )

  }

  $('.scroll-down-half').on('click', function(){
    var step = $('.scroll-down-content').height() / 2;
    $('.scroll-down-content').scrollTo("+=" + step + "px", 500)
  })

  // $('.scroll-start-half').on('click', function(){
  //   var step = $('.scroll-content').width() / 2;
  //   $('.scroll-content').scrollTo("-=" + step + "px", 500)
  // })
  //
  // $('.scroll-end-half').on('click', function(){
  //   var step = $('.scroll-content').width() / 2;
  //   $('.scroll-content').scrollTo("+=" + step + "px", 500)
  // })

  if ( $('.scroll-wrap.h-scroll.normal-speed').length ) {
    // var hAutoScroll = new HAutoScroll( {scrollToMaxTime: 30000} )
    var hScroll = new HScroll( {autoScroll: {scrollToMaxTime: 30000} } )
  }

  if ( $('.scroll-wrap.h-scroll.slow-speed').length ) {
    // var hAutoScroll = new HAutoScroll( {scrollToMaxTime: 40000} )
    var hScroll = new HScroll(  {autoScroll: {scrollToMaxTime: 40000} } )
  }

  if ( $('.scroll-wrap.v-scroll.normal-speed').length ) {
    // var hAutoScroll = new HAutoScroll( {scrollToMaxTime: 30000} )
    var vScroll = new VScroll( {autoScroll: {scrollToMaxTime: 30000} } )
  }

  if ( $('.scroll-wrap.v-scroll.slow-speed').length ) {
    // var hAutoScroll = new HAutoScroll( {scrollToMaxTime: 40000} )
    var vScroll = new VScroll(  {autoScroll: {scrollToMaxTime: 40000} } )
  }


  if ( $('#corp_infos-strategy-gt-page').length ) {
    var myTl = new MyTl();
    myTl.addMovements();
  }

  if ( $('#corp_infos-strategy-xcl-page').length ) {
    var myTl = new MyTl();
    myTl.addMovements();
  }

  if ( $('#parties-navigator-nnl_lead-page').length ) {
    $('.tag').on('click', function(){
      $('.tag').removeClass('active')
      $(this).addClass('active')

      let id = $(this).data('id')
      $('.detail-content').removeClass('active')
      filterItemsById( $('.detail-content'), id ).addClass('active')
    })
  }

})

// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {

  // if ( $('.page-transition').length > 0 ) {
  //   $('.page-transition').removeClass('animate__animated animate__fadeIn');
  // }

  // if ( $('.scroll-wrap').length ) {
  //   var hScroll = new HScroll( HAutoScroll )
  // }


})

// import myImageUrl from 'images/businesses/space/plane.png'

// const canvas = document.getElementById('map');
// const ctx = canvas.getContext('2d');
//
// const image = new Image(60, 45); // Using optional size for image
// image.onload = drawImageActualSize; // Draw when image has loaded
//
// // Load an image of intrinsic size 300x227 in CSS pixels
// image.src = myImageUrl;
//
// function drawImageActualSize() {
//   // Use the intrinsic size of image in CSS pixels for the canvas element
//   canvas.width = this.naturalWidth;
//   canvas.height = this.naturalHeight;
//
//   // Will draw the image as 300x227, ignoring the custom size of 60x45
//   // given in the constructor
//   ctx.drawImage(this, 0, 0);
//
//   // To use the custom size we'll have to specify the scale parameters
//   // using the element's width and height properties - lets draw one
//   // on top in the corner:
//   ctx.drawImage(this, 0, 0, this.width, this.height);
// }
