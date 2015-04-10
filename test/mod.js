var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('mod', function() {
  before(function() {
    helpers.register(Hbs, 'mod');
  });

  it('should handle mod block helper', function() {
    var str = '{{mod a b}}';
    var template = Hbs.compile(str);
    assert(template({ a: 7, b: 4}) === '3');
  });

  it('should handle mod fn', function() {
    assert(Hbs.helpers.mod(9, 5) === 4);;
  });
});
