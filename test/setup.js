var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');
var opts = {
  fn: function() { },
  inverse: function() {}
};
describe('helper setup', function() {
  beforeEach(function() {
    helpers.unregister(Hbs);
  });

  it('should throw error if handlebars is missing', function() {
    assert.throws(function() {
      helpers.register();
    });
    assert.throws(function() {
      helpers.unregister();
    });
  });

  it('should allow plugging in all helpers', function() {
    //helpers.unregister(Hbs);
    // Register all helpers
    helpers.register(Hbs);

    // Ensure all helpers are loaded
    var keys = helpers.index;
    assert(keys.length);

    keys.forEach(function(key) {
      assert(Hbs.helpers[key]);
    });
  });

  it('eq function should work', function() {
    // arrange
    helpers.register(Hbs);
    var a = 3;
    var b = 3;
    var c = 4;

    // act
    var result1 = Hbs.helpers.eq(a, b);
    var result2 = Hbs.helpers.eq(b, c);

    // assert
    assert(result1);
    assert(!result2);
  });

  it('dneq function should work', function() {
    // arrange
    helpers.register(Hbs);
    var a = 3;
    var b = 3;
    var c = 4;

    // act
    var result1 = Hbs.helpers.dneq(a, b);
    var result2 = Hbs.helpers.dneq(b, c);

    // assert
    assert(!result1);
    assert(result2);
  });
});
