// import {DivFilter} from "src/supports/div_filter.js";
import * as DivFilter from "src/supports/div_filter.js";

export {  PointTagsAndContents };

class PointTagsAndContents {
  constructor() {
    this.detail_tags = $('.detail-tag')
    this.active_tag;

    this.point_content_containers = $('.point-content-container')

    this.initDetailTags();
    this.initPointContentContainers()
  }

  // DetailTagLinks
  initDetailTags(){
    var self = this;

    self.detail_tags.on('click touchstart', function(){
      self.point_content_containers.removeClass('active')
      self.active_tag = $(this)

      var tag_name = self.active_tag.data('tag-name')

      DivFilter.filterDivs( self.point_content_containers, "tag-name", tag_name).addClass('active')

      return false
    })
  }

  initPointContentContainers(){
    var self = this;
    self.point_content_containers.on('click touchstart', function(){
      self.point_content_containers.removeClass('active')

      return false
    })
  }

}
