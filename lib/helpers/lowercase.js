if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  module.exports = function(val, options){
    return val.toLowerCase();
  };

  return module.exports;
});
