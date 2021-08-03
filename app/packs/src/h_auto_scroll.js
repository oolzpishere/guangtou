
import 'jquery.scrollto'

// import { MyScroll } from './my_scroll'

export {  HAutoScroll };

class HAutoScroll {
  constructor( ) {
    // super();
    // this.direction = 'horizontal'
    // this._countDownTimer
    this._isEnd = false
    this._isScroll = false
    this._circleTime = 15000
    this._touchStopAutoScrollItems = $('.scroll-wrap, .scroll-left-half, .scroll-right-half')

    // init timer
    this.init()
  }

  init(){
    var _this = this
    circleCounter()
    initTouchStopAutoScroll()
  }

  initTouchStopAutoScroll( ){
    var _this = this
    _this._touchStopAutoScrollItems.each( function( index ) {
      $(this).on('touchstart', function(){
        stopAutoScroll();
      })
    })

  }

  circleCounter(){
    var _this = this
    _this._circleTimer = setTimeout( function() {
      if ( !_this._isScroll) {
        // begin to scroll

      } else if (_this._isEnd) {
        // scroll back to begin
        
      }
    }, _this._circleTime );
  }

  // scroll back > wait countDown

  stopAutoScroll(){
    this._isScroll = false;
    resetTimer()
  }

  resetTimer(){
    var _this = this
    clearTimeout( _this._circleTimer );
    circleCounter()
  }



}
