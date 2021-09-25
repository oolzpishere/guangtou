
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap/dist/gsap.js'
// import counterUp from 'counterup2'
import {Flips} from "./flips"
import {BusinessDetails} from "./business_details"
import {BusinessDetailsSwiper} from "./business_details_swiper"

import { MyHelpers } from 'src/my_helpers.js'
import { TalentsSwiper } from 'src/talents_swiper.js'

import {MyTl} from "src/my_tl.js"


$(document).on("turbolinks:load", function() {
// document.addEventListener("DOMContentLoaded", function(event) {
  var myHelpers = new MyHelpers();

  var wHeight = window.innerHeight;
  $('.window-holder').css("height", wHeight)


  function startCount(target_item) {
    let flips = new Flips();
    flips.beginToCount(target_item);
  }

  if ( $('#corp_infos-page').length ) {
    var myTl = new MyTl

    var corpAllSwiper = new Swiper(".corpAllSwiper", {
            direction: "vertical",
            loop: true,
            autoplay: {
              delay: 15000,
            },
            pagination: {
              el: ".swiper-pagination",
              type: 'bullets',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
            },
            navigation: {
              nextEl: '.my-swiper-button-next',
              prevEl: '.my-swiper-button-prev',
            },
            on: {
              init: function () {
                // corp_all_swiper_tls[0]();
              },
            }
          });

      corpAllSwiper.on('slideChange', function () {
        // corpLinksSwiper.slideTo(swiper.realIndex)
        myTl.clearTl()
        myTl.addMovements()
      });
  }


  if ($('.businesses-main-swiper').length > 0) {
    var swiperHeight = ( wHeight - $('.business-bottom').innerHeight() )
    $(".businesses-main-swiper").css('height', swiperHeight)

    var businessesMainSwiper = new Swiper(".businesses-main-swiper", {
            // loop: true,
            threshold: 40,
            pagination: {
              el: ".swiper-pagination",
              type: 'bullets',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
            },
            navigation: {
              nextEl: '.my-swiper-button-next',
              prevEl: '.my-swiper-button-prev',
            },
            on: {
              init: function () {
                $('.business-detail-bg-img img').eq( 0 ).addClass('active')
                $('.business-swiper-tag').eq( 0 ).addClass('active');
              },
            }
          });

    businessesMainSwiper.on('slideChange', function () {
      $('.business-detail-bg-img img').removeClass('active')
      $('.business-detail-bg-img img').eq( businessesMainSwiper.realIndex ).addClass('active')

      $('.business-swiper-tag').removeClass('active')
      $('.business-swiper-tag').eq( businessesMainSwiper.realIndex ).addClass('active')
    });

    $('.business-swiper-tag').on('click', function(){
      let id = $(this).data('id')
      businessesMainSwiper.slideToLoop(id - 1)
    });
  }

  if ($('.businesses-details-swiper').length > 0) {
    var swiperHeight = ( wHeight - $('.business-bottom').innerHeight() )
    $(".businesses-details-swiper").css('height', swiperHeight)

    // set init status
    let url = new URL( window.location.href );

    new BusinessDetailsSwiper(Swiper, url.searchParams)
  }

  if ($('.industry-hezhou-swiper').length > 0) {
    var industryHezhouSwiper = new Swiper(".industry-hezhou-swiper", {
            loop: true,
            on: {
              init: function () {
                $('.industry-hezhou-swiper-tag').eq(0).addClass('active')
              }
            }
          });

    $('.industry-hezhou-swiper-tag').on('click', function(){
      let humanId = $(this).data('id')
      industryHezhouSwiper.slideTo(humanId)
    })

    industryHezhouSwiper.on('slideChange', function () {
      $('.industry-hezhou-swiper-tag').removeClass('active')
      $('.industry-hezhou-swiper-tag').eq( industryHezhouSwiper.realIndex ).addClass('active')
    });
  }

  if ($('.industry-nanning-swiper').length > 0) {
    var industryNanningSwiper = new Swiper(".industry-nanning-swiper", {
            // loop: true,
            on: {
              init: function () {
                $('.industry-nanning-swiper-tag').eq(0).addClass('active')
              }
            }
          });

    $('.industry-nanning-swiper-tag').on('click', function(){
      let humanId = $(this).data('id')
      console.log('clicked'+humanId)
      console.log( industryNanningSwiper )

      industryNanningSwiper.slideToLoop(humanId - 1)
    })

    industryNanningSwiper.on('slideChange', function () {
      $('.industry-nanning-swiper-tag').removeClass('active')
      $('.industry-nanning-swiper-tag').eq( industryNanningSwiper.realIndex ).addClass('active')
    });
  }

  if ( $('#advantages-team-page .talents-swiper').length ) {
    new TalentsSwiper

  }

  if ( $('.navigator-nnl-brand-swiper').length ) {
    var brandSwiper = new Swiper(".navigator-nnl-brand-swiper", {
            loop: true,
            // effect: 'fade',
            on: {
              init: function () {
                // $('.industry-nanning-swiper-tag').eq(0).addClass('active')
              }
            }
          });

    $('.swiper-tag').on('click', function(){
      let humanId = $(this).data('id')
      // console.log('clicked'+humanId)
      brandSwiper.slideToLoop( humanId )
    })

  }



})




    // var detailsSwiper = new Swiper(".businesses-details-swiper", {
    //         loop: true,
    //         pagination: {
    //           el: ".swiper-pagination",
    //           type: 'bullets',
    //           clickable: true,
    //           bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
    //           bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
    //         },
    //         on: {
    //           init: function () {
    //             $('.business-swiper-tag').eq( 0 ).addClass('active')
    //           },
    //         }
    //       });
    //
    // detailsSwiper.on('slideChange', function () {
    //   $('.business-swiper-tag').removeClass('active')
    //   $('.business-swiper-tag').eq( detailsSwiper.realIndex ).addClass('active')
    // });
    //
    // $('.business-swiper-tag').on('click', function(){
    //   let id = $(this).data('id')
    //   detailsSwiper.slideTo(id)
    // });
    //
    // var businessDetails = new BusinessDetails();
    //
    // $('.component-point-container').on('click', function(){
    //   let humanId = $(this).data('id')
    //   let type = $(this).data('type')
    //   // businessDetails.hideAllComponents();
    //   // businessDetails.showComponent(type, id);
    //   businessDetails.setComponentActive(type, humanId);
    //
    // })
    // // typeof val === 'undefined'


    // if ($('.cultureXclSwiper').length > 0) {
    //   var thumbsSwiper = new Swiper(".cultureThumbsSwiper", {
    //         // spaceBetween: 10,
    //         slidesPerView: 4,
    //         // freeMode: true,
    //         // watchSlidesVisibility: true,
    //         // watchSlidesProgress: true,
    //       });
    //
    //   new Swiper(".cultureXclSwiper", {
    //           loop: true,
    //           autoplay: {
    //              delay: 30000,
    //            },
    //           thumbs: {
    //             swiper: thumbsSwiper
    //           }
    //         });
    // }

  // if ( $('.parties-brand-swiper').length ) {
  //   var partiesBrandSwiper = new Swiper(".parties-brand-swiper", {
  //           // loop: true,
  //           slidesPerView: 1,
  //           pagination: {
  //             el: ".swiper-pagination",
  //             type: 'bullets',
  //             clickable: true,
  //             bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
  //             bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
  //           },
  //           navigation: {
  //             nextEl: '.my-swiper-button-next',
  //             prevEl: '.my-swiper-button-prev',
  //           },
  //           on: {
  //             init: function () {
  //               $('.float-swiper-container').addClass('d-none')
  //               $('.float-swiper-container').css({'opacity': 1})
  //             }
  //           }
  //         });
  //
  //   $('.parties-brand-swiper, .my-swiper-button-next, .my-swiper-button-prev').on('click', function(event){
  //     event.stopPropagation();
  //   })
  //
  //   // $('.parties_brand_detail').on('click', function(event){
  //   //   event.preventDefault();
  //   //   $('.float-swiper-container').removeClass('d-none')
  //   // })
  //   //
  //   // $('.float-swiper-container').on('click', function(event){
  //   //   event.stopPropagation();
  //   //   $('.float-swiper-container').addClass('d-none')
  //   // })
  //
  //
  // }
