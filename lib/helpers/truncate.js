if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  module.exports = function(str, length, delimiter, options){
    if (typeof delimiter === 'object' || !delimiter) {
      options = delimiter;
      delimiter = '...';
    } 
    return str.length > length ? str.substring(0, length) + delimiter : str;
  };
  return module.exports;
});

