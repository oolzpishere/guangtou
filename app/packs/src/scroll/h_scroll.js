import 'jquery.scrollto'

import { MyScroll } from './my_scroll'
import { HAutoScroll } from './h_auto_scroll'


export {  HScroll };
// TODO: add vertical scroll
class HScroll extends MyScroll {
  constructor( opts = { autoScroll: {} } ) {
    super();

    this._autoScroll = new HAutoScroll( this, opts.autoScroll )

    // if ( typeof(autoScroll) != 'undefined' ) {
    //   this._autoScroll = autoScroll
    //
    // }
  }

  initScroll(){
    super.initScroll();
    var _self = this
    _self.initLeftHalf()
    _self.initRightHalf()

  }

  initLeftHalf(){
    var _self = this
    $('.scroll-left-half').on('click', function(){
      var step = _self.scrollWrap.width() / 2;
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

  initRightHalf(){
    var _self = this
    $('.scroll-right-half').on('click', function(){
      var step = _self.scrollWrap.width() / 2;
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
    $('.scroll-left-half, .scroll-right-half').removeClass('d-none')
    if ( _self.scrollPosition() == 'start' ) {
      $('.scroll-left-half').addClass('d-none')
    } else if ( _self.scrollPosition() == 'end' ) {
      $('.scroll-right-half').addClass('d-none')
    }
  }

  scrollPosition(){
    var _self = this
    return _self.horizontalPosition()
  }

  horizontalPosition(){
    var _self = this
    if ( _self.isHorizontalStart() ) {
      _self.position = 'start'
    } else if ( _self.isHorizontalEnd() ) {
      _self.position = 'end'
    } else {
      _self.position = 'scrolling'
    }
    return _self.position
  }

  isHorizontalStart(){
    var _self = this
    return ( _self.scrollWrap.scrollLeft() == 0 )
  }


  isHorizontalEnd(){
    var _self = this
    return ( _self.scrollWrap.scrollLeft() + _self.scrollWrap.width() ) >= _self.scrollContent.width()
  }


}
