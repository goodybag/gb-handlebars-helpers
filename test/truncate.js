var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('truncate', function() {
  before(function() {
    helpers.register(Hbs, 'truncate');
  });

  it('should truncate', function() {
    var result = Hbs.helpers.truncate('abcdefghijkl', 4);
    assert(result === 'abcd...');
  });

  it('should truncate with custom delimiter', function() {
    var result = Hbs.helpers.truncate('coffee barista fair-trade', 5, '*');
    assert(result === 'coffe*');
  });
});
