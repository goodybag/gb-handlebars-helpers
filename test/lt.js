var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('lt', function() {
  before(function() {
    helpers.register(Hbs, 'lt');
  });

  it('should handle lt block helper', function() {
    var str = "{{#lt a b}}a{{else}}b{{/lt}}";
    var template = Hbs.compile(str);
    assert(template({ a: 3, b: 2 }) === 'b');
    assert(template({ a: 2, b: 2 }) === 'b');
    assert(template({ a: 2, b: 3 }) === 'a');
  });

  it('should handle lt fn', function() {
    assert(!Hbs.helpers.lt(9, 2));
    assert(!Hbs.helpers.lt(9, 9));
    assert(Hbs.helpers.lt(8, 9));
  });
});
