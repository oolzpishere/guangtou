// import Swiper from 'swiper/bundle';
import videojs from  "video.js"

// for (let i = 1; i <= 10; i++) {
//   import videoContent1 from "images/party/xcl/excellence/videos/01.png"
//
// }
import videoTitle1 from "images/party/xcl/excellence/videos/01.png"
import videoTitle2 from "images/party/xcl/excellence/videos/02.png"
import videoTitle3 from "images/party/xcl/excellence/videos/03.png"
import videoTitle4 from "images/party/xcl/excellence/videos/04.png"
import videoTitle5 from "images/party/xcl/excellence/videos/05.png"
import videoTitle6 from "images/party/xcl/excellence/videos/06.png"
import videoTitle7 from "images/party/xcl/excellence/videos/07.png"
import videoTitle8 from "images/party/xcl/excellence/videos/08.png"
import videoTitle9 from "images/party/xcl/excellence/videos/09.png"
import videoTitle10 from "images/party/xcl/excellence/videos/010.png"



$(document).on("turbolinks:load", function() {

  if ( $('#parties-navigator-xcl_excellence-videos-page').length ) {
    var activitiesVideos = new ActivitiesVideos
    var activitiesVideoContents = new ActivitiesVideoContents

    $('.video-tag').on('click', function(){
      var videoName = $(this).data('name')

      $('.absolute-video-container').addClass('active')
      // filterItemsByKey( $('.video-content-container'), 'name', videoName ).addClass('active')
      activitiesVideoContents.changeTitle( videoName )

      // activitiesVideos.videos[videoName].play()
      activitiesVideos.changeVideo( videoName )

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
    // this.initVideoNames()

    // this.initVideos()
    this.initVideo()

    this.addCloseBtn()
    this.initVideoCloseBtn()

    this._videoSrcList = {
      wj: "/videos/parties/activities/wj.mp4",
      gqbn: "/videos/parties/activities/gqbn.mp4",
      yxzg: "/videos/parties/activities/yxzg.mp4",
      qnll: "/videos/parties/activities/qnll.mp4",
      wazg: "/videos/parties/activities/wazg.mp4",
      dzwx: "/videos/parties/activities/dzwx.mp4",
      gxgs: "/videos/parties/activities/gxgs.mp4",
      xdsd: "/videos/parties/activities/xdsd.mp4",
      dcmz: "/videos/parties/activities/dcmz.mp4",
      xyhd: "/videos/parties/activities/xyhd.mp4",
    }
  }

  // playVideo(videoName){
  //   var _this = this
  //
  //   if ( typeof(_this.videos[videoName]) == 'undefined' ) {
  //     _this.initVideoAndPlay( videoName )
  //   } else {
  //     _this.videos[videoName].play()
  //   }
  // }

  // private

  // initVideoNames() {
  //   var _self = this;
  //   $('.video-content-container').each(function( index ) {
  //     _self.videoNames.push( $(this).data('name') )
  //   });
  // }

  initVideo() {
    var _this = this;

    let idName = 'party-' + 'wj' + '-video'
    var player = videojs( idName, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      controlBar: {
        'pictureInPictureToggle': false,
        volumePanel: {
          inline: true
        },
      }
    });
    _this._video = player

  }

  changeVideo( videoName ){
    var _this = this;
    _this._video.pause();
    _this._video.reset();
    _this._video.src([
        {
          type: 'video/mp4',
          src: _this.getVideoSrc(videoName)
        },
    ]);
    _this._video.load()
    _this._video.play()

  }

  getVideoSrc(videoName) {
    var _this = this;
    return _this._videoSrcList[videoName]
  }

  addCloseBtn() {
    var _self = this;

    var player = _self._video;

    var mButton = videojs.getComponent('closeButton');
    var button = new mButton( player, {});
    button.addClass('my-video-close-btn')

    // strategy_player.controlBar.el().prepend( button.el() )
    player.controlBar.addChild(button, {}, 0)

  }

  initVideoCloseBtn(){
    var _this = this;
    $('.my-video-close-btn').on('click touchstart', function(){
      // _this.pauseAllVideos()
      _this._video.pause()
      _this.exitFullScreen( _this._video )
      // let currentVideoName = _this.getVideoName(this)
      $('.absolute-video-container').removeClass('active')
      // $('.video-content-container').removeClass('active')
      return false
    })
  }

  getVideoName(item){
   let currentVideoName = $(item).parents('.video-content-container').data('name')
   return currentVideoName
  }

  exitFullScreen(player){
    if ( player.isFullscreen() ) {
      player.exitFullscreen()
    }
  }



}


// videoDispose(videoName){
//   var _this = this;
//   var player = _this.videos[ videoName ]
//   if ( typeof( player ) != 'undefined' ) {
//     _this.exitFullScreen(player)
//     player.dispose()
//   }
//   // debugger
//
// }
class ActivitiesVideoContents {
  constructor() {
    // ['wj', 'gqbn', 'yxzg', 'qnll', 'wazg', 'dzwx', 'gxgs', 'xdsd', 'dcmz', 'xyhd']

    this._videoTitles = {
      wj: videoTitle1,
      gqbn: videoTitle2,
      yxzg: videoTitle3,
      qnll: videoTitle4,
      wazg: videoTitle5,
      dzwx: videoTitle6,
      gxgs: videoTitle7,
      xdsd: videoTitle8,
      dcmz: videoTitle9,
      xyhd: videoTitle10,
    }
  }

  changeTitle( videoName ){
    var _this = this
    $('.video-content-title').attr( 'src', _this._videoTitles[videoName] )
  }


}
