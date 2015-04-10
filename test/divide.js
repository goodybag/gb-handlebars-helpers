var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('divide', function() {
  before(function() {
    helpers.register(Hbs, 'divide');
  });

  it('should handle divide block helper', function() {
    var str = '{{divide a b}}';
    var template = Hbs.compile(str);
    assert(template({ a: 3, b: 2}) === '1.5');
  });

  it('should handle divide fn', function() {
    assert(Hbs.helpers.divide(8, 2) === 4);
  });
});
