var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('lowercase', function() {
  before(function() {
    helpers.register(Hbs, 'lowercase');
  });

  it('should handle lowercase block helper', function() {
    var str = '{{lowercase a}}';
    var template = Hbs.compile(str);
    assert(template({ a: 'AbCdEfG'}) === 'abcdefg');
  });

  it('should handle lowercase fn', function() {
    assert(Hbs.helpers.lowercase('123AbCdE') === '123abcde');
  });
});
