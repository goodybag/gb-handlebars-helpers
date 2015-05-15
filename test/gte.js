var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('gte', function() {
  before(function() {
    helpers.register(Hbs, 'gte');
  });

  it('should handle gte block helper', function() {
    var str = "{{#gte a b}}a{{else}}b{{/gte}}";
    var template = Hbs.compile(str);
    assert(template({ a: 3, b: 2 }) === 'a');
    assert(template({ a: 2, b: 2 }) === 'a');
    assert(template({ a: 2, b: 3 }) === 'b');
  });

  it('should handle gte fn', function() {
    assert(Hbs.helpers.gte(9, 2));
    assert(Hbs.helpers.gte(9, 9));
    assert(!Hbs.helpers.gte(8, 9));
  });
});
