// import Swiper from 'swiper/bundle';
import videojs from  "video.js"


$(document).on("turbolinks:load", function() {

  if ( $('#parties-navigator-xcl_excellence-videos-page').length ) {
    var activitiesVideos = new ActivitiesVideos

    $('.video-tag').on('click', function(){
      var videoName = $(this).data('name')

      $('.absolute-video-container').addClass('active')
      filterItemsByKey( $('.video-content-container'), 'name', videoName ).addClass('active')

      // activitiesVideos.videos[videoName].play()
      activitiesVideos.playVideo( videoName )

    })

  }

  function filterItemsByKey( items, key, value ){
    var item = items.filter( function() {
      return $(this).data(key) == value;
    });
    return item
  }


});

class ActivitiesVideos {
  constructor() {
    this.videos = {}
    // ['wj', 'gqbn', 'yxzg', 'qnll', 'wazg', 'dzwx', 'gxgs', 'xdsd', 'dcmz', 'xyhd']
    this.videoNames = []
    this.initVideoNames()

    this.initVideos()

    this.addCloseBtns()
    this.initVideoCloseBtn()
  }

  playVideo(videoName){
    var _this = this

    if ( typeof(_this.videos[videoName]) == 'undefined' ) {
      _this.initVideoAndPlay( videoName )
    } else {
      _this.videos[videoName].play()
    }
  }

  initVideoNames() {
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
        preload: 'false',
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

  initVideoAndPlay( videoName ) {
    var _self = this;
    let idName = 'party-' + videoName + '-video'

    var player = videojs( idName, {
      controls: true,
      autoplay: true,
      preload: 'false',
      controlBar: {
        'pictureInPictureToggle': false,
        volumePanel: {
          inline: true
        }
      }
    });

    _self.videos[ videoName ] = player
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

  initVideoCloseBtn(){
    var _this = this;
    $('.my-video-close-btn').on('click touchstart mouseenter', function(){
      // _this.pauseAllVideos()
      // get videoName

      let currentVideoName = _this.getVideoName(this)
      _this.videoDispose( currentVideoName )
      // debugger;
      $('.absolute-video-container').removeClass('active')
      $('.video-content-container').removeClass('active')
      return false
    })
  }

  getVideoName(item){
   let currentVideoName = $(item).parents('.video-content-container').data('name')
   return currentVideoName
  }

  // pauseAllVideos(){
  //   var _self = this;
  //   $.map( _self.videos, function( value, key ) {
  //     var player = value;
  //     player.pause();
  //     _self.exitFullScreen(player)
  //   })
  // }

  exitFullScreen(player){
    if ( player.isFullscreen() ) {
      player.exitFullscreen()
    }
  }

  videoDispose(videoName){
    var _this = this;
    var player = _this.videos[ videoName ]
    if ( typeof( player ) != 'undefined' ) {
      _this.exitFullScreen(player)
      player.dispose()
    }
    // debugger

  }


}
