if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  var _ = require('lodash');
  module.exports = function(arr, element, options){
    if ( !options || typeof options.fn !== 'function' ) return _.contains(arr, element);
      return options[_.contains(arr, element) ? 'fn' : 'inverse'](this);
  };

  return module.exports;
});

