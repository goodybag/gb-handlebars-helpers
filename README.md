# Goodybag Handlebars Helpers
> A collection of useful handlebars helpers
> for the browser or server. Pull in what you
> need or grab all of em.

## Install

```shell
bower install gb-handlebars-helpers
npm install gb-handlebars-helpers
```

## Usage

```js
var Handlebars = require('handlebars');
var helpers = require('gb-handlebars-helpers');

helpers.register(Handlebars); // register all helpers
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

* **eq**
* **dneq**
* truncate

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
