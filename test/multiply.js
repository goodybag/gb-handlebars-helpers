var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('multiply', function() {
  before(function() {
    helpers.register(Hbs, 'multiply');
  });

  it('should handle multiply block helper', function() {
    var str = '{{multiply a b}}';
    var template = Hbs.compile(str);
    assert(template({ a: 15, b: 3}) === '45');
  });

  it('should handle multiply fn', function() {
    assert(Hbs.helpers.multiply(3, 6) === 18);
  });
});
