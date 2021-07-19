import { gsap } from 'gsap/dist/gsap.js'

export { MyTl };

var MyTl = function( options = {'firstDelay': 0.2} ) {
  this.tl = gsap.timeline();
  this.tl.delay( options['firstDelay'] )

  this.sequenceArray = [];
  this.sortSequence();

}

// MyTl.prototype.findSequence = function() {
//   // find sequence
//   $('.my-sequence')
// };

MyTl.prototype.sortSequence = function() {
  var _self = this;
  _self.sequenceArray = $('.my-sequence').toArray()

  // sort array
  _self.sequenceArray.sort( (a, b) => $(a).data('sequence-id') - $(b).data('sequence-id') );
};

MyTl.prototype.addMovements = function() {
  var _self = this;

  _self.sequenceArray.forEach( (item, i) => {
    // debugger;
    var addMovementFunc = _self.movementFuncs()[ $(item).data('movement') ]
    addMovementFunc( _self, item, $(item).data('sequence-id') )
  });

}

MyTl.prototype.movementFuncs = function() {
  var _self = this;
  return {
    slideInLeft:  _self.slideInLeft,
    slideInRight:  _self.slideInRight,
    fadeIn: _self.fadeIn,
  }
}


MyTl.prototype.slideInLeft = function( _self, item, i) {
  _self.tl.from( item, { x: -600, opacity: 0, duration: _self.getItemDuration(item) }, _self.getLabel(i) );
}

MyTl.prototype.slideInRight = function( _self, item, i) {
  _self.tl.from( item, { x: 600, opacity: 0, duration: _self.getItemDuration(item)   }, _self.getLabel(i) );
}

MyTl.prototype.fadeIn = function( _self, item, i) {
  _self.tl.from( item, { opacity: 0, duration: _self.getItemDuration(item) }, _self.getLabel(i) );
}

MyTl.prototype.myClearTl = function(tl) {
  tl.seek('end');
  tl.clear();
};

MyTl.prototype.getLabel = function(i) {
  var lable = 'sequence' + i
  return lable
};

MyTl.prototype.getItemDuration = function(item) {
  // add data-duration='5' at item, specify item duration.
  var duration = 1;
  if ( $(item).data('duration') ) {
    duration = $(item).data('duration')
  }
  return duration
};
