var helpers = require('../lib/helpers');
var assert = require('assert');
var Hbs = require('handlebars');

describe('notNull', function() {
  before(function() {
    helpers.register(Hbs, 'notNull');
  });

  it('should handle notNull', function() {
    var str = '{{#notNull obj}}a{{else}}b{{/notNull}}';
    var template = Hbs.compile(str);
    assert(template({ obj: true }) === 'a');
    assert(template({ obj: false }) === 'a');
    assert(template({ obj: null }) === 'b');
  });
});

