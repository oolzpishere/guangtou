
import 'jquery.scrollto'

// import { MyScroll } from './my_scroll'

export {  VAutoScroll };

class VAutoScroll {
  constructor( vScroll, opts = {scrollToMaxTime: 10000} ) {
    // super();
    // this.direction = 'horizontal'
    // this._countDownTimer
    this._vScroll = vScroll
    this._isAutoScroll = false
    this._circleTime = 5000
    this._touchStopAutoScrollItems = $('.scroll-wrap, .scroll-start-half, .scroll-end-half')
    this._scrollToMaxTime = opts.scrollToMaxTime

    this._scrollWrap = $('.scroll-wrap')
    this._scrollContent = $('.scroll-content')

    this._circleCounterNum = 0

    // init timer
    this.init()
  }

  circleCounter(){
    console.log('begin circleCounter');
    var _this = this
    _this._circleTimer = setInterval( function() {
      if ( _this.isNotScrolling() ) {
        // begin to scroll
        _this.autoScrollToMax()
      } else if ( _this.isStayAtEnd() ) {
        // scroll back to begin
        _this.scrollBack()
      }

      console.log( '_circleCounterNum:' + (_this._circleCounterNum += 1 ) );
    }, _this._circleTime );
  }

  stopAutoScroll(){
    this.setNotScrolling()
    this.stopJqueryScrollTo()
    this.resetTimer()
    this._vScroll.updateArrow()
  }

  // private

  init(){
    var _this = this
    _this.circleCounter()
    _this.initTouchStopAutoScroll()

    _this.disposeWhenChangePage()
  }

  initTouchStopAutoScroll( ){
    var _this = this
    _this._touchStopAutoScrollItems.each( function( index ) {
      $(this).on('touchstart', function(){
        _this.stopAutoScroll();
      })
    })

  }

  autoScrollToMax(){
    var _this = this
    _this.setScrolling()
    // _this._isAutoScroll = true;
    _this.stopTimer()

    _this._scrollWrap.scrollTo("max", _this._scrollToMaxTime , {
      done: function(){
        console.log('done: touch-bottom');
      },
      always: function(){
        _this.setNotScrolling()
        _this.resetTimer();
      }
    })

  }

  scrollBack(){
    var _this = this
    _this.setScrolling()
    _this.stopTimer()
    console.log('scrollBack');
    _this._scrollWrap.scrollTo("0", 1000, {
      always: function(){
        _this.setNotScrolling()
        console.log('scrollBack always: start circleCounter');
        _this.resetTimer();
      }
    })

  }

  resetTimer(){
    var _this = this
    clearInterval( _this._circleTimer );
    _this.circleCounter()
  }

  stopTimer(){
    var _this = this
    clearInterval( _this._circleTimer );
  }

  isNotScrolling(){
    return ( !this._isAutoScroll && !this._vScroll.isVerticalEnd() )
  }

  isStayAtEnd(){
    return ( !this._isAutoScroll && this._vScroll.isVerticalEnd() )
  }

  setScrolling(){
    this._isAutoScroll = true;
  }

  setNotScrolling(){
    this._isAutoScroll = false;
  }

  disposeWhenChangePage(){
    var _this = this
    $(document).on("turbolinks:before-cache", function() {
      console.log('turbolinks:before-cache stopTimer ');
      _this.dispose()
    })
  }

  dispose(){
    var _this = this
    _this.stopJqueryScrollTo()
    _this.stopTimer()
  }

  stopJqueryScrollTo(){
    this._scrollWrap.stop()
  }




}
