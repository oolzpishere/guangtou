
import 'jquery.scrollto'

// import { MyScroll } from './my_scroll'

export {  HAutoScroll };

class HAutoScroll {
  constructor( ) {
    // super();
    // this.direction = 'horizontal'
    // this._countDownTimer
    this._isEnd = false
    this._isAutoScroll = false
    this._circleTime = 15000
    this._touchStopAutoScrollItems = $('.scroll-wrap, .scroll-left-half, .scroll-right-half')

    this._scrollContent = $('.scroll-content')

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
      if ( !_this._isAutoScroll) {
        // begin to scroll
        _this.startAutoScroll()
      } else if (_this._isEnd) {
        // scroll back to begin
        _this.scrollBack()
      }
    }, _this._circleTime );
  }

  // scroll back > wait countDown

  startAutoScroll(){
    var _this = this
    this._isAutoScroll = true;
    this.stopTimer()

    _this._scrollContent.scrollTo("max", 10000, {
      fail: function(){
        console.log('fail: stop');
      },
      done: function(){
        console.log('done: touch-bottom');
      },
      always: function(){
        console.log('always: start circleCounter');
        _this.circleCounter();
      }
    })

  }

  scrollBack(){
    var _this = this
    this._isAutoScroll = true;
    this.stopTimer()

    _this._scrollContent.scrollTo("0", 1000, {
      always: function(){
        console.log('always: start circleCounter');
        _this.circleCounter();
      }
    })

  }

  stopAutoScroll(){
    this._isAutoScroll = false;
    resetTimer()
  }


  resetTimer(){
    var _this = this
    clearTimeout( _this._circleTimer );
    circleCounter()
  }

  stopTimer(){
    var _this = this
    clearTimeout( _this._circleTimer );
  }



}
