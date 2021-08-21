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
    // ['wj', 'gqbn', 'yxzg', 'qnll', 'wazg', 'dzwx', 'gxgs', 'xdsd', 'dcmz', 'xyhd']

    this.initVideo()

    this.addCloseBtn()
    this.initVideoCloseBtn()
  }

  // private

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
    // _this._video = player

    _this._changeVideoObj = new ChangeVideoObj(player, _this._videoSrcList)
  }

  changeVideo( videoName ){
    var _this = this;
    _this._changeVideoObj.changeVideo( videoName )
  }

  addCloseBtn() {
    var _this = this;
    var player = _this._changeVideoObj._player

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
      _this._changeVideoObj._player.pause()
      _this._changeVideoObj.exitFullScreen()

      $('.absolute-video-container').removeClass('active')
      // $('.video-content-container').removeClass('active')
      return false
    })
  }

  exitFullScreen(player){
    if ( player.isFullscreen() ) {
      player.exitFullscreen()
    }
  }

}

class ChangeVideoObj{
  constructor(player, videoSrcList) {
    this._player = player
    this._videoSrcList = videoSrcList
  }


  changeVideo( videoName, type = 'video/mp4' ){
    var _this = this;
    _this._player.pause();
    _this._player.reset();
    _this._player.src([
        {
          type: type,
          src: _this.getVideoSrc(videoName)
        },
    ]);
    _this._player.load()
    _this._player.play()

  }

  exitFullScreen(){
    var _this = this;
    if ( _this._player.isFullscreen() ) {
      _this._player.exitFullscreen()
    }
  }

  // private

  getVideoSrc(videoName) {
    var _this = this;
    return _this._videoSrcList[videoName]
  }

}

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
