if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  module.exports = function(a, b, options){
    if ( !options || typeof options.fn !== 'function' ) return a !== b;
    return options[a !== b ? 'fn' : 'inverse'](this);
  };
  return module.exports;
});

