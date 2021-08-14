import 'jquery.scrollto'

import { MyScroll } from './my_scroll'
import { VAutoScroll } from './v_auto_scroll'


export {  VScroll };
// TODO: add vertical scroll
class VScroll extends MyScroll {
  constructor( opts = { autoScroll: {} } ) {
    super();

    this._autoScroll = new VAutoScroll( this, opts.autoScroll )

  }

  isVerticalStart(){
    var _self = this
    return ( _self.scrollWrap.scrollTop() == 0 )
  }

  isVerticalEnd(){
    var _self = this
    return ( _self.scrollWrap.scrollTop() + _self.scrollWrap.height() ) >= _self.scrollContent.height()
  }

  // private

  initScroll(){
    super.initScroll();
    var _self = this
    _self.initStartHalf()
    _self.initEndHalf()

  }

  initStartHalf(){
    var _self = this
    $('.scroll-start-half').on('click', function(){
      var step = _self.scrollWrap.height() / 2;
      _self.scrollWrap.scrollTo("-=" + step + "px", 500, {
        start: function(){
          _self._autoScroll.setScrolling()
          _self._autoScroll.resetTimer()
        },
        onAfter: function() {
          _self.updateArrow()
        },
        always: function(){
          _self._autoScroll.setNotScrolling()
        }
      });
    })
  }

  initEndHalf(){
    var _self = this
    $('.scroll-end-half').on('click', function(){
      var step = _self.scrollWrap.height() / 2;
      _self.scrollWrap.scrollTo("+=" + step + "px", 500, {
        start: function(){
          _self._autoScroll.setScrolling()
          _self._autoScroll.resetTimer()
        },
        onAfter: function() {
          _self.updateArrow()
        },
        always: function(){
          _self._autoScroll.setNotScrolling()
        }
      });
    })
  }

  addTouchUpdateArrow(){
    var _self = this
    $('.scroll-wrap').on('touchmove touchend', function(){
      _self.updateArrow()
    })
  }

  updateArrow() {
    var _self = this
    $('.scroll-start-half, .scroll-end-half').removeClass('d-none')
    if ( _self.isVerticalStart() ) {
      $('.scroll-start-half').addClass('d-none')
    } else if ( _self.isVerticalEnd() ) {
      $('.scroll-end-half').addClass('d-none')
    }
  }


}

// scrollPosition(){
//   var _self = this
//   if ( _self.isHorizontalStart() ) {
//     return 'start'
//   } else if ( _self.isHorizontalEnd() ) {
//     return 'end'
//   } else {
//     return 'scrolling'
//   }
//
// }
