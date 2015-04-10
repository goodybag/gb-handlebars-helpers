if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  module.exports = function(dollars){
    var val = Math.round(dollars * 100);
    return isNaN(val) ? '' : val;
  };

  return module.exports;
});
