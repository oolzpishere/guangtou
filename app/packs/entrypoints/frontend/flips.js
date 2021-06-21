
import counterUp from 'counterup2'

$(document).on("turbolinks:load", function() {

  // const num1 = document.querySelector( '.counter' )
  // Start counting, do this on DOM ready or with Waypoints.
  $( '.counter' ).each(function( index ) {
    counterUp( this, {
        duration: 700,
        delay: 16,
    } )
  })




})
