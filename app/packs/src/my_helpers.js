

export { MyHelpers };

var MyHelpers = function() {

}

MyHelpers.prototype.myClearTl = function(tl) {
  tl.seek('end');
  tl.clear();
};
