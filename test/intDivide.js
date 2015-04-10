var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('intDivide', function() {
  before(function() {
    helpers.register(Hbs, 'intDivide');
  });

  it('should handle intDivide block helper', function() {
    var str = '{{intDivide a b}}';
    var template = Hbs.compile(str);
    assert(template({ a: 3, b: 2}) === '1');
  });

  it('should handle intDivide fn', function() {
    assert(Hbs.helpers.intDivide(13, 3) === 4);
  });
});
