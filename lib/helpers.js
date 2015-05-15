if ( typeof module === "object" && module && typeof module.exports === "object" ) {
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  var _ = require('lodash');
  var utils = require('./utils');

  var helpers = {
    add: function(a, b, options) {
      return (+a) + (+b);
    },

    capitalize: function(str, options) {
      if(str && typeof str === 'string') {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      return str;
    },

    contains: function(arr, element, options) {
      if ( !options || typeof options.fn !== 'function' ) return _.contains(arr, element);
        return options[_.contains(arr, element) ? 'fn' : 'inverse'](this);
    },

    divide: function(a, b, options) {
      return a / b;
    },

    dneq: function(a, b, options) {
      if ( !options || typeof options.fn !== 'function' ) return a !== b;
      return options[a !== b ? 'fn' : 'inverse'](this);
    },

    dollars: function(cents) {
      cents = cents === null ? 0 : parseFloat(cents); // parse as float incase of partial cents
      return isNaN(cents) ? '' : utils.round10(cents / 100, -2).toFixed(2); // partial cents get rounded here
    },

    eq: function(a, b, options) {
      if ( !options || typeof options.fn !== 'function' ) return a === b;
      return options[a === b ? 'fn' : 'inverse'](this);
    },

    gt: function(a, b, options) {
      if ( !options || typeof options.fn !== 'function' ) return a > b;
      return options[a > b ? 'fn' : 'inverse'](this);
    },

    gte: function(a, b, options) {
      if ( !options || typeof options.fn !== 'function' ) return a >= b;
      return options[a >= b ? 'fn' : 'inverse'](this);
    },

    intDivide: function(a, b, options) {
      return Math.floor(a / b);
    },

    is: function(a) {
      var rest = Array.prototype.slice.call( arguments, 1 );
      var options = rest.pop();
      var eq = function(b) { return a === b; };
      var opt = rest.some(eq) ? 'fn' : 'inverse';
      return options[opt](this);
    },

    isNull: function(val, options) {
      return options[ val === null ? 'fn' : 'inverse' ](this);
    },

    lowercase: function(val, options) {
      return val.toLowerCase();
    },

    lt: function(a, b, options) {
      if ( !options || typeof options.fn !== 'function' ) return a < b;
      return options[a < b ? 'fn' : 'inverse'](this);
    },

    lte: function(a, b, options) {
      if ( !options || typeof options.fn !== 'function' ) return a <= b;
      return options[a <= b ? 'fn' : 'inverse'](this);
    },

    mod: function(a, b, options) {
      return a % b;
    },

    multiply: function(a, b, options) {
      return a * b;
    },

    notNull: function( val, options ) {
      return options[ val !== null ? 'fn' : 'inverse' ](this);
    },

    pennies: function(dollars) {
      var val = Math.round(dollars * 100);
      return isNaN(val) ? '' : val;
    },

    subtract: function(a, b, options) {
      return (+a) - (+b);
    },

    truncate: function(str, length, delimiter, options) {
      if (typeof delimiter === 'object' || !delimiter) {
        options = delimiter;
        delimiter = '...';
      }
      return str.length > length ? str.substring(0, length) + delimiter : str;
    },

    uppercase: function(val, options) {
      return val.toUpperCase();
    }
  };

  module.exports = helpers;
  return module.exports;
});
