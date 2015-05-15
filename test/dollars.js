var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('dollars', function() {
  before(function() {
    helpers.register(Hbs, 'dollars');
  });

  it('should handle dollars block helper', function() {
    var str = '{{dollars a}}';
    var template = Hbs.compile(str);
    assert(template({ a: 349}) === '3.49');
  });

  it('should handle dollars fn', function() {
    assert(Hbs.helpers.dollars(349) === '3.49');
    assert(Hbs.helpers.dollars('53781') === '537.81');
    assert(Hbs.helpers.dollars('-431098') === '-4310.98');
  });
});
