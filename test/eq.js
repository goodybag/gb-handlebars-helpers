var assert = require('assert');
var helpers = require('../index');
var Hbs = require('handlebars');

describe('eq', function() {
  it('should handle eq', function() {
    // Arrange
    helpers.register(Hbs);
    var templateStr = '{{#eq age 21}}hello{{else}}world{{/eq}}';

    // Act
    var template = Hbs.compile(templateStr);
    var html = template({ age: 21 });

    // Assert
    assert(html.indexOf('hello') >= 0);
  });
});
