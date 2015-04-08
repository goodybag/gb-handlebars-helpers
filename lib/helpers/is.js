if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  module.exports = function(a){
    var rest = Array.prototype.slice.call( arguments, 1 );
    var options = rest.pop();
    var eq = function(b) { return a === b; };
    var opt = rest.some(eq) ? 'fn' : 'inverse';
    return options[opt](this);
  };

  return module.exports;
});

