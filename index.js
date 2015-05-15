if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  var helpers = require('./lib/helpers');

  module.exports = {
    register: function(Hbs) {
      if (!Hbs) throw Error('Handlebars is required!');
      var args = Array.prototype.slice.call(arguments);

      var toRegister = [];
      if (!args[1]) {
        toRegister = Object.keys(helpers);
      } else if (Array.isArray(args[1])) {
        toRegister = args[1];
      } else {
        toRegister = args.slice(1);
      }

      toRegister.forEach(function(helper) {
        Hbs.registerHelper(helper, helpers[helper]);
      });
    },

    unregister: function(Hbs) {
      if (!Hbs) throw new Error('Handlebars is required!');
      var args = Array.prototype.slice.call(arguments);
      Hbs.unregisterHelper(args.slice(1));
    },

    _helpers: helpers
  }
  return module.exports;
});
