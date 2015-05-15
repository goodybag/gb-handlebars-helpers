var helpers = require('../index');
var assert = require('assert');
var Hbs = require('handlebars');

describe('is', function() {
  before(function() {
    helpers.register(Hbs, 'is');
  });

  it('should handle is', function() {
    var group = 'client';
    var str = "{{#is mood 'happy' 'excited' }}Satisfactory{{else}}Unsatisfactory{{/is}}"
    var template = Hbs.compile(str);
    assert(template({ mood: 'happy' }) === 'Satisfactory');
    assert(template({ mood: 'sad' }) === 'Unsatisfactory');
  });
});
