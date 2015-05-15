var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('subtract', function() {
  before(function() {
    helpers.register(Hbs, 'subtract');
  });

  it('should handle subtract block helper', function() {
    var str = '{{subtract a b}}';
    var template = Hbs.compile(str);
    assert(template({ a: 8, b: 3}) === '5');
  });

  it('should handle subtract fn', function() {
    assert(Hbs.helpers.subtract(1, 2) === -1);
  });
});
