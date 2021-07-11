import {BusinessDetails} from "./business_details"

export { BusinessDetailsSwiper };

var BusinessDetailsSwiper = function(Swiper, searchParams) {
  this.initSearchParams(searchParams)
  this.initComponentPoint()
  this.detailsSwiper = this.initSwiper(Swiper);
  this.initActions()
}

BusinessDetailsSwiper.prototype.initSwiper = function( Swiper ){
  var _self = this;

  var detailsSwiper = new Swiper(".businesses-details-swiper", {
          // loop: true,
          pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
          },
          initialSlide: _self.slide,
          on: {
            init: function () {
              $('.business-swiper-tag').eq( _self.slide ).addClass('active');
              _self.setPointToIntState()
              $('.business-detail-bg-img img').eq( _self.slide ).addClass('active')
            },
            afterInit: function() {
            }
          }
        });
  return detailsSwiper
}

BusinessDetailsSwiper.prototype.initActions = function( ){
  var _self = this;

  _self.detailsSwiper.on('slideChange', function () {
    $('.business-swiper-tag').removeClass('active')
    $('.business-swiper-tag').eq( _self.detailsSwiper.realIndex ).addClass('active')

    $('.business-detail-bg-img img').removeClass('active')
    $('.business-detail-bg-img img').eq( _self.detailsSwiper.realIndex ).addClass('active')

    let type = $('.swiper-slide').eq( _self.detailsSwiper.realIndex ).data('type')
    _self.businessDetails.setPageActive(type, 1);
  });

  $('.business-swiper-tag').on('click', function(){
    let id = $(this).data('id')
    _self.detailsSwiper.slideToLoop(id - 1)
  });

}

BusinessDetailsSwiper.prototype.initComponentPoint = function( ){
  var _self = this;
  _self.businessDetails = new BusinessDetails( _self );
  $('.component-point-container').on('click', function(){
    let humanId = $(this).data('id')
    let type = $(this).data('type')

    _self.setSwiperPointActive(type, humanId);

    _self.businessDetails.setComponentActive(type, humanId);
  })
}

BusinessDetailsSwiper.prototype.initSearchParams = function( searchParams ){
  var _self = this;
  _self.slide = 0
  _self.id = 0
  if ( searchParams.has('slide') ) {
    _self.slide = Number( searchParams.get("slide") );
  }

  if ( searchParams.has('id') ) {
    _self.id = Number( searchParams.get("id") );
  }
}

BusinessDetailsSwiper.prototype.setSwiperPointActive = function( type, humanId ){
  let realIndex = humanId - 1
  var slide = this.getSlideByType(type)
  slide.find('.component-point-container').removeClass('active')
  slide.find('.component-point-container').eq(realIndex).addClass('active')
}

BusinessDetailsSwiper.prototype.setPointToIntState = function( ){
  var _self = this;
  $(".businesses-details-swiper").find('.swiper-slide-active').find(`.component-point-container[data-id='${_self.id}']`).click();
}

BusinessDetailsSwiper.prototype.getSlideByType = function( type ){
  var slide = $('.swiper-slide').filter(function() {
    return $(this).data("type") == type;
  });
  return slide
  // return $('.' + type + '-slide')
  // .find('[data-type="' + true + '"]')
}


//   if ( _self.componentsContainer.length > 0) {
//
//   }
