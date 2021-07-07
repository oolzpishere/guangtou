
import 'jquery.scrollto'


$(document).on("turbolinks:load", function() {

  if ( $('.timeline-container').length > 0 ) {
    var tlCountDownTimer;

    tlCircleCounter();
    $('.timeline-container').on('click touchstart mouseenter', function(){
      $(this).stop();
      resetTlStatus()
      refreshTlCountDownTimer();
    })

    $('.tl-tag').on('click', function(){
      $('.timeline-container').stop();
      refreshTlCountDownTimer();
      resetTlStatus()

      let humanId = Number( $(this).data('id') )
      let target = $('.tl-data').eq( humanId - 1)
      $('.timeline-container').scrollTo(target, 1000)
    })

  }

  function timelineScrollToBottom(){
    $('.timeline-container').scrollTo("max", 10000, {
      fail: function(){
        console.log('fail: stop');
        resetTlStatus()
        refreshTlCountDownTimer();
      },
      done: function(){
        console.log('done: touch-bottom');
        $('.timeline-container').addClass('touch-bottom');
        setTlStopStatus()
        refreshTlCountDownTimer();
      },
      always: function(){
      }
    })
  }

  // tl == timeline
  function tlCircleCounter(){
    tlCountDownTimer = setTimeout( function() {
      if ( $('.timeline-container').hasClass('scrolling') ) {
        // skip
        console.log('tl scrolling');
        tlCircleCounter();
      } else if ( $('.timeline-container').hasClass('touch-bottom') ) {
        console.log('tl touch-bottom');
        // scroll to top and remove class touch-bottom
        // only place to scrollToTop
        $('.timeline-container').removeClass('touch-bottom')
        setTlScrollingStatus();
        $('.timeline-container').scrollTo("0", 1000, {
          always: function(){
            setTlStopStatus();
            refreshTlCountDownTimer();
          }
        })
      } else {
        console.log('tl begin scroll');
        timelineScrollToBottom();
      }
    }, 15000);
  }

  function refreshTlCountDownTimer() {
    clearTimeout(tlCountDownTimer);
    tlCircleCounter()
  }

  function setTlStopStatus() {
    $('.timeline-container').removeClass('scrolling');
  }

  function resetTlStatus() {
    $('.timeline-container').removeClass('touch-bottom');
    $('.timeline-container').removeClass('scrolling');
  }



  function setTlScrollingStatus() {
    $('.timeline-container').addClass('scrolling');
  }




})

// teardown: fires before Turbolinks saves the current page to cache.
$(document).on("turbolinks:before-cache", function() {

  // if ( $('.page-transition').length > 0 ) {
  //   $('.page-transition').removeClass('animate__animated animate__fadeIn');
  // }

})

//
//
// if ( $('.team-page').length > 0 ) {
//
//   timelineScrollToBottom()
//   $('.timeline-container').on('click', function(){
//     $(this).stop();
//     clearTimeout(countDownTimer);
//     countDown();
//   })
// }
//
// var countDownTimer;
// function timelineScrollToBottom(){
//   $('.timeline-container').scrollTo("max", 10000, {
//     fail: function(){
//       console.log('fail, stop');
//       countDown()
//     },
//     done: function(){
//       // wait 30s then scroll to top
//       $('.timeline-container').addClass('touch-bottom')
//       $('.timeline-container').click();
//     },
//     always: function(){
//     }
//   })
// }
//
// function countDown(){
//   console.log('begin count down');
//   countDownTimer = setTimeout( function() {
//     if ( $('.timeline-container').hasClass('touch-bottom') ) {
//       // scroll to top and remove class touch-bottom
//       // only place to scrollToTop
//       $('.timeline-container').scrollTo("0", 1000)
//       $('.timeline-container').removeClass('touch-bottom')
//       countDown()
//     } else {
//       timelineScrollToBottom();
//     }
//   }, 15000);
// }
