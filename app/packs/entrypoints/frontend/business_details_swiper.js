import {BusinessDetails} from "./business_details"

export { BusinessDetailsSwiper };

var BusinessDetailsSwiper = function(Swiper) {
  this.detailsSwiper = this.initSwiper(Swiper);
  this.initActions()

}

BusinessDetailsSwiper.prototype.initSwiper = function( Swiper ){
  var _self = this;
  var detailsSwiper = new Swiper(".businesses-details-swiper", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
          },
          on: {
            init: function () {
              $('.business-swiper-tag').eq( 0 ).addClass('active')
            },
          }
        });
  return detailsSwiper
}

BusinessDetailsSwiper.prototype.initActions = function( ){
  var _self = this;
  _self.detailsSwiper.on('slideChange', function () {
    $('.business-swiper-tag').removeClass('active')
    $('.business-swiper-tag').eq( _self.detailsSwiper.realIndex ).addClass('active')
  });

  $('.business-swiper-tag').on('click', function(){
    let id = $(this).data('id')
    _self.detailsSwiper.slideTo(id)
  });

  var businessDetails = new BusinessDetails( _self );

  $('.component-point-container').on('click', function(){
    let humanId = $(this).data('id')
    let type = $(this).data('type')

    _self.setSwiperPointActive(type, humanId);

    businessDetails.setComponentActive(type, humanId);
  })

}

BusinessDetailsSwiper.prototype.setSwiperPointActive = function( type, humanId ){
  let realIndex = humanId - 1
  $('.' + type + '-slide').find('.component-point-container').removeClass('active')
  $('.' + type + '-slide').find('.component-point-container').eq(realIndex).addClass('active')
}

//   if ( _self.componentsContainer.length > 0) {
//
//   }
