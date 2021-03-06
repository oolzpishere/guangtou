// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
// import "channels"

import $ from 'jquery'

Rails.start()
Turbolinks.start()
ActiveStorage.start()


//1 import all image files in a folder:
require.context('../images', true)
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//1

// $(document).on("turbolinks:load", function() {
//   var wHeight = window.innerHeight;
//   var wWidth = window.innerWidth;
//
//   console.log(wHeight)
//
//   if ( $('.window-holder').length > 0 ) {
//     $('.window-holder').css("height", wHeight)
//     $('.window-holder').css("width", wWidth)
//   }
// })
