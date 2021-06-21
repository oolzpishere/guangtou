
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

$(document).on("turbolinks:load", function() {
// document.addEventListener("DOMContentLoaded", function(event) {
  var wHeight = window.innerHeight;
  $('.window-holder').css("height", wHeight)
  
  var swiper = new Swiper(".mySwiper", {
          direction: "vertical",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

})
