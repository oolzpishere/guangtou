import 'jquery.scrollto'


export {  MyScroll };

class MyScroll {
  constructor( opts = {} ) {
    this.scrollWrap = $('.scroll-wrap')
    this.scrollContent = $('.scroll-content')
    this.position = 'start'

    this.setDirection(opts)

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
      horizontalPosition()
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

  }

  isHorizontalEnd(){
    var _self = this
    return ( _self.scrollWrap.scrollLeft() + _self.scrollWrap.width() ) >= _self.scrollContent.width()
  }




}
