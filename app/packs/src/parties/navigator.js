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

    $('.point-container').on('click touchstart', function(){
      var item = $(this).parents('.industry-point-container')
      var id = $(this).data('id')
      // var detail_img = $(this)

      $('.industry-point-container').removeClass('active')
      $('.industry-detail-img-container').removeClass('active')

      item.addClass('active')
      filterItemsById( $('.industry-detail-img-container'), id).addClass('active')
      return false
    })

    $('.detail-tag').on('click touchstart', function(){
      $('.local-detail-container').removeClass('active')
      var id = $(this).data('id')
      filterItemsById( $('.local-detail-container'), id).addClass('active')

      return false
    })

    $('.local-detail-container').on('click touchstart', function(){
      $('.local-detail-container').removeClass('active')

      return false
    })

    function filterItemsById( items, id ){
      var item = items.filter(function() {
        return $(this).data("id") == id;
      });
      return item
    }


  }



});
