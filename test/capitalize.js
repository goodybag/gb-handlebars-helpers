var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('capitalize', function() {
  before(function() {
    helpers.register(Hbs, 'capitalize');
  });

  it('should handle capitalize block helper', function() {
    var str = '{{capitalize a }}';
    var template = Hbs.compile(str);
    assert(template({ a: 'scooby doo' }) === 'Scooby doo');
  });

  it('should handle capitalize fn', function() {
    assert(Hbs.helpers.capitalize('shaggy') === 'Shaggy');
  });
});
