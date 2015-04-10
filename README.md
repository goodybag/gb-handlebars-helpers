# Goodybag Handlebars Helpers
> Lightweight collection of useful handlebars helpers
> for the browser or server.

## Install

```shell
bower install gb-handlebars-helpers
npm install gb-handlebars-helpers
```

## Usage

Register the helpers:

```js
var Handlebars = require('handlebars');
var helpers = require('gb-handlebars-helpers');

// register all the helpers
helpers.register(Handlebars);

// or cherry pick what you need
helpers.register(Handlebars, ['truncate', 'dollars']);
```

Using helpers:

```js
// use a helper directly
console.log(Handlebars.helpers.dollars(234)); // '2.34'

// or in a template
var templateStr = 'You balance: ${{dollars amount}}';
var template = Handlebars.compile(templateStr);
var output = template({ amount: 234 }); // 'Your balance: $2.34'
```

## API

### helpers.register(Handlebars)

Register all helpers

### helpers.register(Handlebars, [ a, b, ... ])

Register with a list of helper names

### helpers.register(Handlebars, a, b, ...)

Register helpers by passing in parameters

### helpers.unregister(Handlebar)
### helpers.unregister(Handlebars, [ a, b, ... ])
### helpers.unregister(Handlebars, a, b, ... )

Unregister using same signatures as **.register**

## Helpers

### Comparison

* **eq**
* **dneq**
* **lt**
* **lte**
* **gt**
* **gte**

### Math

* add
* subtract
* multiply
* divide
* intDivide
* mod

### String manipulation

* truncate
* capitalize
* uppercase
* lowercase

### Currency

* dollars
* pennies

### Datetime

* datepart
* timepart
* formatDatetime

Bolded helpers can be used for conditional
templating blocks.

For example:

```handlebars
{{#gt age 30}}
You are old!
{{else}}
Such youth!
{{/gt}}
```

## License

MIT
