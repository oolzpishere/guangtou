export {  DivFilter };

class DivFilter {
  constructor() {

  }
  // functions
  filterItems( items, data_tag, value ){
    var item = items.filter(function() {
      return $(this).data( data_tag ) == value;
    });
    return item
  }

}
