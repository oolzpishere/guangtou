import 'jquery.scrollto'

export {  HScroll };

class HScroll {
  constructor( opts = {} ) {
    this.scrollWrap = $('.scroll-wrap')
    this.scrollContent = $('.scroll-content')
    this.position = 'start'

    this.setDirection(opts)
    this.direction = 'horizontal'

    this.initScroll()
  }

  initScroll(){
    var _self = this
    $('.scroll-left-half').on('click', function(){
      var step = $('.scroll-wrap').width() / 2;
      $('.scroll-wrap').scrollTo("-=" + step + "px", 500, {
        onAfter: function() {
          _self.updateArrow()
        }
      });

    })

    $('.scroll-right-half').on('click', function(){
      var step = $('.scroll-wrap').width() / 2;
      $('.scroll-wrap').scrollTo("+=" + step + "px", 500, {
        onAfter: function() {
          _self.updateArrow()
        }
      });
    })

    $('.scroll-wrap').on('touchmove touchend', function(){
      _self.updateArrow()
    })

    _self.updateArrow()
  }

  updateArrow() {
    var _self = this
    $('.scroll-left-half, .scroll-right-half').removeClass('d-none')
    if ( _self.scrollPosition() == 'start' ) {
      $('.scroll-left-half').addClass('d-none')
    } else if ( _self.scrollPosition() == 'end' ) {
      $('.scroll-right-half').addClass('d-none')
    }
  }

  setDirection(opts){
    if (opts.direction) {
      this.direction = opts.direction
    } else {
      this.direction = 'horizontal'
    }
  }

  scrollPosition(){
    var _self = this
    if ( _self.direction == 'horizontal' ) {
      return _self.horizontalPosition()
    } else {

    }
  }

  horizontalPosition(){
    var _self = this
    if ( _self.scrollWrap.scrollLeft() == 0 ) {
      _self.position = 'start'
    } else if ( _self.isHorizontalEnd() ) {
      _self.position = 'end'
    } else {
      _self.position = 'scrolling'
    }
    return _self.position
  }

  isHorizontalEnd(){
    var _self = this
    return ( _self.scrollWrap.scrollLeft() + _self.scrollWrap.width() ) >= _self.scrollContent.width()
  }




}
