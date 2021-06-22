
import counterUp from 'counterup2'
// import { CountUp } from 'countup.js';

export { Flips };

var Flips = function() {
  // this.rooms_num = 0;
  // this.initRoomsCount();
  // this.beginToCount();
}

Flips.prototype.beginToCount = function(){
  // var _self = this;
  if ($('.counter').length > 0) {
    $( '.counter' ).each(function( index ) {
      counterUp( this, {
          duration: 700,
          delay: 2
      } )
    })
  }

//   var demo = new CountUp('counter', 2000);
//   if (!demo.error) {
//     demo.start();
//   } else {
//     console.error(demo.error);
//   }

};

$(document).on("turbolinks:load", function() {

  // const num1 = document.querySelector( '.counter' )
  // Start counting, do this on DOM ready or with Waypoints.
  // $( '.counter' ).each(function( index ) {
  //   counterUp( this, {
  //       duration: 700,
  //       delay: 16,
  //   } )
  // })

})
