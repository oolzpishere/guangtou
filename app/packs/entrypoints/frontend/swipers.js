
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
            type: 'bullets',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet my-swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active my-swiper-pagination-bullet-active',
          },
        });

})
