if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  var utils = require('../utils');

  module.exports = function(cents){
    var cents = cents == null ? 0 : parseFloat(cents); // parse as float incase of partial cents
    return isNaN(cents) ? '' : utils.round10(cents / 100, -2).toFixed(2); // partial cents get rounded here
  };

  return module.exports;
});
