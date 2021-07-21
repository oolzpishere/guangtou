import Swiper from 'swiper/bundle';
// import videojs from  "video.js"


$(document).on("turbolinks:load", function() {

  if ( $('#parties-navigator-page').length > 0 ) {

    var partyIndexSwiper = new Swiper(".parties-navigator-swiper", {
            // loop: true,
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

  }



});
