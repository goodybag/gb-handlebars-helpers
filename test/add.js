var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('add', function() {
  before(function() {
    helpers.register(Hbs, 'add');
  });

  it('should handle add block helper', function() {
    var str = '{{add a 3}}';
    var template = Hbs.compile(str);
    assert(template({ a: 7}) === '10');
  });

  it('should handle add fn', function() {
    assert(Hbs.helpers.add(5, 6) === 11);
  });
});
