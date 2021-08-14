
import 'jquery.scrollto'
import {VScroll} from "src/scroll/v_scroll.js"


$(document).on("turbolinks:load", function() {

  if ( $('.timeline-container').length ) {

    initTlTag();
    var vScroll = new VScroll( {autoScroll: {scrollToMaxTime: 30000} } )

  }

  // private

  function initTlTag() {
    $('.tl-tag').on('click', function(){
      $('.timeline-container').stop();

      // refreshTlCountDownTimer();
      // resetTlStatus()

      $('.tl-tag').removeClass('active')
      $(this).addClass('active')

      let humanId = Number( $(this).data('id') )
      let target = $('.tl-data').eq( humanId - 1)

      $('.timeline-container').scrollTo(target, 1000,{
        start: function(){
          vScroll._autoScroll.setScrolling()
          vScroll._autoScroll.resetTimer()
        },
        onAfter: function() {
          vScroll.updateArrow()
        },
        always: function(){
          vScroll._autoScroll.setNotScrolling()
        }
      })

    })
  }






})

// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {

  // if ( $('.page-transition').length > 0 ) {
  //   $('.page-transition').removeClass('animate__animated animate__fadeIn');
  // }

})


  // function timelineScrollToBottom(){
  //   $('.timeline-container').scrollTo("max", 10000, {
  //     fail: function(){
  //       console.log('fail: stop');
  //       resetTlStatus()
  //       refreshTlCountDownTimer();
  //     },
  //     done: function(){
  //       console.log('done: touch-bottom');
  //       $('.timeline-container').addClass('touch-bottom');
  //       setTlStopStatus()
  //       refreshTlCountDownTimer();
  //     },
  //     always: function(){
  //     }
  //   })
  // }

  // // tl == timeline
  // function tlCircleCounter(){
  //   tlCountDownTimer = setTimeout( function() {
  //     if ( $('.timeline-container').hasClass('scrolling') ) {
  //       // skip
  //       console.log('tl scrolling');
  //       tlCircleCounter();
  //     } else if ( $('.timeline-container').hasClass('touch-bottom') ) {
  //       console.log('tl touch-bottom');
  //       // scroll to top and remove class touch-bottom
  //       // only place to scrollToTop
  //       $('.timeline-container').removeClass('touch-bottom')
  //       setTlScrollingStatus();
  //       $('.timeline-container').scrollTo("0", 1000, {
  //         always: function(){
  //           setTlStopStatus();
  //           refreshTlCountDownTimer();
  //         }
  //       })
  //     } else {
  //       console.log('tl begin scroll');
  //       timelineScrollToBottom();
  //     }
  //   }, 15000);
  // }
  //
  // function refreshTlCountDownTimer() {
  //   clearTimeout(tlCountDownTimer);
  //   tlCircleCounter()
  // }
  // function setTlStopStatus() {
  //   $('.timeline-container').removeClass('scrolling');
  // }
  //
  // function resetTlStatus() {
  //   $('.timeline-container').removeClass('touch-bottom');
  //   $('.timeline-container').removeClass('scrolling');
  // }
  //
  //
  //
  // function setTlScrollingStatus() {
  //   $('.timeline-container').addClass('scrolling');
  // }
