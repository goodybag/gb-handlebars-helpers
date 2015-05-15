var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('pennies', function() {
  before(function() {
    helpers.register(Hbs, 'pennies');
  });

  it('should handle pennies block helper', function() {
    var str = '{{pennies a}}';
    var template = Hbs.compile(str);
    assert(template({ a: 45.23}) === '4523');
    assert(template({ a: '45.23'}) === '4523');
  });

  it('should handle pennies fn', function() {
    assert.equal(Hbs.helpers.pennies(531.12), '53112');
    assert.equal(Hbs.helpers.pennies(43), '4300');
    assert.equal(Hbs.helpers.pennies(0), '0');
    assert.equal(Hbs.helpers.pennies(-4310), '-431000');
    assert.equal(Hbs.helpers.pennies('531.12'), '53112');
    assert.equal(Hbs.helpers.pennies('-531.12'), '-53112');
    assert.equal(Hbs.helpers.pennies('-12'), '-1200');
  });
});
