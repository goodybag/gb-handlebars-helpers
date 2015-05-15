var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('isNull', function() {
  before(function() {
    helpers.register(Hbs, 'isNull');
  });

  it('should handle isNull', function() {
    var str = '{{#isNull obj}}a{{else}}b{{/isNull}}';
    var template = Hbs.compile(str);
    assert(template({ obj: true }) === 'b');
    assert(template({ obj: false }) === 'b');
    assert(template({ obj: null }) === 'a');
  });
});

