

export { BusinessDetails };

var BusinessDetails = function( businessDetailsSwiper ) {
  this.componentsContainer = $('.business-components-container');
  this.initBtnsWithSwiper();
  this.businessDetailsSwiper = businessDetailsSwiper

}

BusinessDetails.prototype.initBtnsWithSwiper = function( ){
  var _self = this;
  $('.component-btn').on('click', function(){
    let humanId = $(this).data('id')
    let type = $(this).data('type')

    _self.setComponentActive( type, humanId)

    // hide all swiper active-img
    _self.hideElements( _self.getSwiperSlide(type).find('.title-active-img') )

    // show swiper active img by type and id.
    _self.businessDetailsSwiper.setSwiperPointActive( type, humanId )

  })
}

BusinessDetails.prototype.getSwiperSlide = function( type ){
  return $('.' + type + '-slide')
}

BusinessDetails.prototype.getTypeComponents = function( type ){
  return $( '.' + type + '-components' )
}

BusinessDetails.prototype.hideElements = function( elements ){
  elements.addClass('d-none')
}

BusinessDetails.prototype.showTypeComponent = function( typeComponents, realIndex ){
  typeComponents.removeClass('d-none');
  typeComponents.children('.component-info').eq(realIndex).removeClass('d-none');
}

BusinessDetails.prototype.componentBtnActive = function( typeComponents, realIndex ){
  var _self = this;
  _self.removeActive( $('.component-btns').find('.component-btn') )
  typeComponents.children('.component-btns').find('.component-btn').eq(realIndex).addClass('active');
}

BusinessDetails.prototype.setComponentActive = function(type, humanId){
  var _self = this;
  let realIndex = humanId - 1

  _self.removeActive( _self.getTypeComponents(type) )
  _self.getTypeComponents(type).addClass('active')
  // set componentInfo
  _self.removeActive( _self.getTypeComponents(type).find('.component-info') )
  _self.getTypeComponents(type).find('.component-info').eq( realIndex ).addClass('active')
  // set component btn
  _self.removeActive( _self.getTypeComponents(type).find('.component-btn') )
  _self.getTypeComponents(type).find('.component-btn').eq( realIndex ).addClass('active');
}

BusinessDetails.prototype.removeActive = function( items ){
  items.removeClass('active');
}


// this.initRoomsCount();

//   if ( _self.componentsContainer.length > 0) {
//
//   }

// _self.getSwiperSlide(type).find('.title-active-img').filter(`[data-id='${humanId}']`).removeClass('d-none')
// eg. $('.' + type + '-slide').find(`.title-active-img[data-id='${humanId}']`).removeClass('d-none')
