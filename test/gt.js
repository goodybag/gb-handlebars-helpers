var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('gt', function() {
  before(function() {
    helpers.register(Hbs, 'gt');
  });

  it('should handle gt block helper', function() {
    var str = "{{#gt a b}}a{{else}}b{{/gt}}";
    var template = Hbs.compile(str);
    assert(template({ a: 3, b: 2 }) === 'a');
    assert(template({ a: 2, b: 2 }) === 'b');
    assert(template({ a: 2, b: 3 }) === 'b');
  });

  it('should handle gt fn', function() {
    assert(Hbs.helpers.gt(9, 2));
    assert(!Hbs.helpers.gt(9, 9));
    assert(!Hbs.helpers.gt(8, 9));
  });
});
