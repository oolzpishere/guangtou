

export { BusinessDetails };

var BusinessDetails = function() {
  this.componentsContainer = $('.business-components-container');
  // this.initRoomsCount();
  this.initBtnsWithSwiper();
}
//   var _self = this;
//   if ( _self.componentsContainer.length > 0) {
//
//   }
BusinessDetails.prototype.showComponent = function( type, id ){
  let typeComponents = $( '.' + type + '-components' )
  let childrenIndex = id - 1
  typeComponents.removeClass('d-none');
  typeComponents.children('.component-info').eq(childrenIndex).removeClass('d-none');

  typeComponents.children('.component-btns').find('.component-btn').eq(childrenIndex).find('.component-btn-img').addClass('d-none');
  typeComponents.children('.component-btns').find('.component-btn').eq(childrenIndex).find('.component-btn-active-img').removeClass('d-none');

}

BusinessDetails.prototype.hideAllComponents = function( ){
  $('.business-components').addClass('d-none');
  // .component-info
  $('.business-components').children('.component-info').addClass('d-none');
}

BusinessDetails.prototype.initBtnsWithSwiper = function( ){
  $('.component-btn').on('click', function(){
    let id = $(this).data('id')
    let type = $(this).data('type')
    // hide all swiper active-img
    $('.' + type + '-slide').find('.title-active-img').addClass('d-none')
    // show swiper type > id chagne to active
    $('.' + type + '-slide').find('.title' + id + '-active-img').removeClass('d-none')
  })

}
