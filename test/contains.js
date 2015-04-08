var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('contains', function() {
  before(function() {
    helpers.register(Hbs, 'contains');
  });

  it('should handle contains block helper', function() {
    var str = "{{#contains palette color}}found{{else}}missing{{/contains}}";
    var template = Hbs.compile(str);
    assert(template({ palette: ['red', 'orange'], color: 'red' }) === 'found');
    assert(template({ palette: ['blue', 'orange'], color: 'red' }) === 'missing');
  });

  it('should handle contains fn', function() {
    assert(Hbs.helpers.contains([1,2,3], 3));
    assert(!Hbs.helpers.contains([1,2,3], 5));
  });
});
