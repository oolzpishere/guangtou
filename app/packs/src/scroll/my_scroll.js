import 'jquery.scrollto'


export {  MyScroll };

class MyScroll {
  constructor( ) {
    this.scrollWrap = $('.scroll-wrap')
    this.scrollContent = $('.scroll-content')
    this.position = 'start'

    this.initScroll()

  }

  initScroll(){
    var _self = this
    this.updateArrow()
    this.addTouchUpdateArrow()
  }

  updateArrow() {
    var _self = this
  }

  addTouchUpdateArrow(){
    var _self = this
    _self.scrollWrap.on('touchmove touchend', function(){
      _self.updateArrow()
    })
  }

}
