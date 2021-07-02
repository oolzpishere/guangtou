

$(document).on("turbolinks:load", function() {

  // identify page
  if ( $('#_profile_profile_nnl').length > 0 ) {
    // find quick button container, insert movement div
    $('.shortcuts_container').append(
      "<div class='play-video-sc'>play-video</div>",
      "<div class='stop-video-sc'>stop-video</div>",
    );
    
    // add action to button
    $('.play-video-sc').on('click', function(){
      $('.nnl-profile-video-cover').click();
    })

    $('.stop-video-sc').on('click', function(){
      $('.close-nnl-video').click();
    })

  }

})
