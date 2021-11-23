import Swiper from 'swiper/bundle';
// import videojs from  "video.js"
import {DivFilter} from "src/supports/div_filter.js";
import {PointsAndTags} from "src/lib/points_and_tags.js";
import {PointTagsAndContents} from "src/lib/point_tags_and_contents.js";


$(document).on("turbolinks:load", function() {

  if ( $('#parties-navigator-page').length > 0 ) {

    var partyIndexSwiper = new Swiper(".parties-navigator-swiper", {
            // loop: true,
            threshold: 50,
            pagination: {
              el: ".swiper-pagination",
              type: 'bullets',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
            },
            on: {
              init: function () {
                $('.swiper-tag').eq( 0 ).addClass('active');
              },
            }
          });

    partyIndexSwiper.on('slideChange', function () {
      $('.swiper-tag').removeClass('active')
      $('.swiper-tag').eq( partyIndexSwiper.realIndex ).addClass('active')
    });

    $('.swiper-tag').on('click', function(){
      let id = $(this).data('id')
      partyIndexSwiper.slideToLoop(id - 1)
    });

    // gaungxi branches

    new PointsAndTags();
    new PointTagsAndContents();


  }



});




// $('.point-container').on('click touchstart', function(){
//   $('.point-container').removeClass('active')
//   $('.point-detail-container').removeClass('active')
//
//   $(this).addClass('active')
//
//   var id = $(this).data('id')
//   filterItems( $('.point-detail-container'), 'id', id).addClass('active')
//   return false
// })
//
// $('.detail-tag').on('click touchstart', function(){
//   $('.local-detail-container').removeClass('active')
//   var tag_name = $(this).data('tag-name')
//
//   filterItems( $('.local-detail-container'), "tag-name", tag_name).addClass('active')
//
//   return false
// })
//
// $('.local-detail-container').on('click touchstart', function(){
//   $('.local-detail-container').removeClass('active')
//
//   return false
// })
//
// function filterItems( items, data_tag, value ){
//   var item = items.filter(function() {
//     return $(this).data( data_tag ) == value;
//   });
//   return item
// }
