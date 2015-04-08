if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require, exports, module) {
  module.exports = {
    register: function(Hbs) {
      if ( !Hbs ) throw new Error('Handlebars is required!');
      var args = Array.prototype.slice.call(arguments);
      var helpers;
      if (!args[1]) {
        helpers = module.exports.index;
      } else if (Array.isArray(args[1])) {
        helpers = args[1];
      } else {
        helpers = args.slice(1);
      }
      helpers.forEach(function(helper) {
        Hbs.registerHelper(helper, require('./helpers/' + helper));
      });
    },
    unregister: function(Hbs) {
      if (!Hbs ) throw new Error('Handlebars is required!');
    },
    index: require('./')
  };

  return module.exports;
});
