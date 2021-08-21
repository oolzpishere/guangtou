// import Swiper from 'swiper/bundle';
// import videojs from  "video.js"

export { Videos };

class Videos {
  constructor( ) {
    this._videos = {}


  }

  addVideo(name, player) {
    this._videos[name] = player
  }

  getVideo(name){
    this._videos[name]
  }

  anyVideoPlaying(){
    var _this = this
    if ( Object.keys( _this._videos ).length == 0 ) {
      return false
    }
    return _this.checkEachVideoPlayStatus()
  }


  // private

  checkEachVideoPlayStatus(){
    var _this = this

    for(var key in _this._videos) {
      if ( !_this._videos[key].paused() ) {
        return true
      }
    }

  }


}
