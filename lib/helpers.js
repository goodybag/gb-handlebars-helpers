if ( typeof module === "object" && module && typeof module.exports === "object" ){
  var isNode = true, define = function (factory) {
    var args = Array.prototype.slice.call(arguments);
    if (Array.isArray(factory)) {
      factory = args[1];
    };
    module.exports = factory(require, exports, module);
  };
}

var deps = [
  'require',
  './index'
];

var index = [
  './helpers/add',
  './helpers/capitalize',
  './helpers/contains',
  './helpers/divide',
  './helpers/dneq',
  './helpers/dollars',
  './helpers/eq',
  './helpers/gt',
  './helpers/gte',
  './helpers/intDivide',
  './helpers/is',
  './helpers/isNull',
  './helpers/lowercase',
  './helpers/lt',
  './helpers/lte',
  './helpers/mod',
  './helpers/multiply',
  './helpers/notNull',
  './helpers/pennies',
  './helpers/subtract',
  './helpers/truncate',
  './helpers/uppercase'
];

define(deps.concat(index), function(require, exports, module) {
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
    index: index.map(function(h) { return h.replace('./helpers/', ''); })
  };

  return module.exports;
});
