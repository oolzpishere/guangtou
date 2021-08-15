import { gsap } from 'gsap/dist/gsap.js'

export { MyTl };

var MyTl = function( options = {'firstDelay': 0.2} ) {
  this.tl = gsap.timeline();
  this.tl.delay( options['firstDelay'] )

  this.sequenceDivs = new SequenceDivs
}


MyTl.prototype.addMovements = function() {
  var _this = this;

  _this.sequenceDivs.sequenceArray.forEach( (sequenceDiv, i) => {
    var animation_opts = $.extend(
      {},
      { duration: sequenceDiv.duration },
      _this.movementOpts()[ sequenceDiv.movement ]
    );

    _this.addTlFrom( _this, sequenceDiv, animation_opts)
  });

}

MyTl.prototype.movementOpts = function() {
  return {
    slideInLeft:  { x: -600, opacity: 0 },
    slideInRight: { x: 600, opacity: 0 },
    fadeIn: { opacity: 0 },
  }
}

MyTl.prototype.addTlFrom = function( _this, sequenceDiv, animation_opts) {
  _this.tl.from( sequenceDiv.el, animation_opts, sequenceDiv.label );
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
    var _this = this;
    $('.my-sequence').each(function( index ) {
      _this.sequenceArray.push( new SequenceDiv( this ) );
    });
  }

  sortSequence() {
    var _this = this;
    // sort array
    _this.sequenceArray.sort( (a, b) => a.sequenceId - b.sequenceId );
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
    var _this = this
    // add data-duration='5' at item, specify item duration.
    if ( _this.$item.data('duration') ) {
      // _this.defaultDuration = _this.$item.data('duration')
      return _this.$item.data('duration')
    }
    return _this.defaultDuration
  };


}

 // var _proto = SequenceDivs.prototype;
// _this.sequenceArray = $('.my-sequence').toArray()


// MyTl.prototype.findSequence = function() {
//   // find sequence
//   $('.my-sequence')
// };
