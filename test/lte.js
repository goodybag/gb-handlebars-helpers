var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('lte', function() {
  before(function() {
    helpers.register(Hbs, 'lte');
  });

  it('should handle lte block helper', function() {
    var str = "{{#lte a b}}a{{else}}b{{/lte}}";
    var template = Hbs.compile(str);
    assert(template({ a: 3, b: 2 }) === 'b');
    assert(template({ a: 2, b: 2 }) === 'a');
    assert(template({ a: 2, b: 3 }) === 'a');
  });

  it('should handle lte fn', function() {
    assert(!Hbs.helpers.lte(9, 2));
    assert(Hbs.helpers.lte(9, 9));
    assert(Hbs.helpers.lte(8, 9));
  });
});
