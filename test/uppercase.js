var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('uppercase', function() {
  before(function() {
    helpers.register(Hbs, 'uppercase');
  });

  it('should handle uppercase block helper', function() {
    var str = '{{uppercase a}}';
    var template = Hbs.compile(str);
    assert(template({ a: 'hello world'}) === 'HELLO WORLD');
  });

  it('should handle uppercase fn', function() {
    assert(Hbs.helpers.uppercase('hello') === 'HELLO');
  });
});
