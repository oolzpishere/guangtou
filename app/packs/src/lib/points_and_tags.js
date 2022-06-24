// import {DivFilter} from "src/supports/div_filter.js";
import * as DivFilter from "src/supports/div_filter.js";

export {  PointsAndTags };

class PointsAndTags {
  constructor() {
    this.points = $('.point-container');
    this.active_point;

    this.point_detail_containers = $('.point-detail-container')

    this.initPoints();
  }

  initPoints(){
    var self = this;

    self.points.on('click touchstart', function(){
      self.active_point = $(this)
      self.points.removeClass('active')
      self.point_detail_containers.removeClass('active')

      $(this).addClass('active')

      var id = $(this).data('id')

      DivFilter.filterDivs( self.point_detail_containers, 'id', id).addClass('active')
      return false
    })
  }

}