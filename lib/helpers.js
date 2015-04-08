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
      
      if (!args[1]) {
        module.exports.index.forEach(function(key) {
          Hbs.registerHelper(key, require('./helpers/' + key));
        });
      } else if (Array.isArray(args[1])) {
        // register a list of helpers
      } else {
        // register rest of params
        var keys = args.slice(1);
      }
    },
    unregister: function(Hbs) {
      if (!Hbs ) throw new Error('Handlebars is required!');
    },
    index: require('./')
  };

  return module.exports;
});
