// import Swiper from 'swiper/bundle';
import videojs from  "video.js"

export { AllVideos };

class AllVideos {
  constructor( opts = {} ) {
    this.videos = {}
    this.initVideoNames()
    this.initVideos()

    if (opts.closeButton == true) {
      this.addCloseBtns()
    }
    // this.initVideoCloseBtn()
  }

  initVideoNames() {
    this.videoNames = []
    // ['wj', 'gqbn', 'yxzg', 'qnll', 'wazg', 'dzwx', 'gxgs', 'xdsd', 'dcmz', 'xyhd']
    var _self = this;
    $('.video-content-container').each(function( index ) {
      _self.videoNames.push( $(this).data('name') )
    });
  }

  initVideos() {
    var _self = this;
    _self.videoNames.forEach((videoName, i) => {
      let idName = 'party-' + videoName + '-video'
      var player = videojs( idName, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        controlBar: {
          'pictureInPictureToggle': false,
          volumePanel: {
            inline: true
          }
        }
      });
      _self.videos[ videoName ] = player
    });

  }

  addCloseBtns() {
    var _self = this;
    $.map( _self.videos, function( value, key ) {
      var player = value;

      var mButton = videojs.getComponent('closeButton');
      var button = new mButton( player, {});
      button.addClass('my-video-close-btn')

      // strategy_player.controlBar.el().prepend( button.el() )
      player.controlBar.addChild(button, {}, 0)
    });


  }

  // initVideoCloseBtn(){
  //   var _self = this;
  //   $('.my-video-close-btn').on('click touchstart mouseenter', function(){
  //     _self.pauseAllVideos()
  //     $('.absolute-video-container').removeClass('active')
  //     $('.video-content-container').removeClass('active')
  //   })
  // }

  pauseAllVideos(){
    var _self = this;
    $.map( _self.videos, function( value, key ) {
      var player = value;
      player.pause();
      _self.exitFullScreen(player)
    })
  }

  exitFullScreen(player){
    if ( player.isFullscreen() ) {
      player.exitFullscreen()
    }
  }



}
