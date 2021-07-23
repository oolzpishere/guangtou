import { gsap } from 'gsap/dist/gsap.js'

export { MyTl };

var MyTl = function( options = {'firstDelay': 0.2} ) {
  this.tl = gsap.timeline();
  this.tl.delay( options['firstDelay'] )

  this.sequenceDivs = new SequenceDivs
}


MyTl.prototype.addMovements = function() {
  var _self = this;

  _self.sequenceDivs.sequenceArray.forEach( (sequenceDiv, i) => {
    let opts = _self.movementOpts()[ sequenceDiv.movement ]
    var animation_opts = $.extend({}, { duration: sequenceDiv.duration }, opts);
    _self.addTlFrom( _self, sequenceDiv, animation_opts)
  });

}

MyTl.prototype.movementOpts = function() {
  var _self = this;
  return {
    slideInLeft:  { x: -600, opacity: 0 },
    slideInRight: { x: 600, opacity: 0 },
    fadeIn: { opacity: 0 },
  }
}

MyTl.prototype.addTlFrom = function( _self, sequenceDiv, animation_opts) {
  _self.tl.from( sequenceDiv.el, animation_opts, sequenceDiv.label );
}

MyTl.prototype.myClearTl = function(tl) {
  tl.seek('end');
  tl.clear();
};




class SequenceDivs {
  constructor() {
    this.sequenceArray = [];
    this.initSequenceArray()
    this.sortSequence();
  }

  initSequenceArray() {
    var _self = this;
    $('.my-sequence').each(function( index ) {
      _self.sequenceArray.push( new SequenceDiv( this ) );
    });
  }

  sortSequence() {
    var _self = this;
    // sort array
    _self.sequenceArray.sort( (a, b) => a.sequenceId - b.sequenceId );
  }

}

class SequenceDiv {
  constructor( item ) {
    this.defaultDuration = 1

    this.el = item
    this.$item = $(item)
    this.movement = this.$item.data('movement')
    this.sequenceId = this.$item.data('sequence-id')
    this.label = this.getLabel()
    this.duration = this.getItemDuration()
  }

  getLabel() {
    var label = 'sequence' + this.$item.data('sequence-id')
    // var label = 'sequence' + $(item).data('sequence-id')
    return label
  };

  getItemDuration() {
    var _self = this
    // add data-duration='5' at item, specify item duration.
    if ( _self.$item.data('duration') ) {
      _self.defaultDuration = _self.$item.data('duration')
    }
    return _self.defaultDuration
  };


}

 // var _proto = SequenceDivs.prototype;
// _self.sequenceArray = $('.my-sequence').toArray()


// MyTl.prototype.findSequence = function() {
//   // find sequence
//   $('.my-sequence')
// };
