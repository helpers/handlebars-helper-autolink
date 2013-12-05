# {{autolink}} [![NPM version](https://badge.fury.io/js/handlebars-helper-autolink.png)](http://badge.fury.io/js/handlebars-helper-autolink)

> Generate relative links from the "current page" to other dest pages.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-autolink`.

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-autolink` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-autolink' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-autolink', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```
Alternatively, you can avoid defining the helper in the [Assemble](https://github.com/assemble/assemble) task options by adding module to both the `devDependencies` and `keywords` in your project's package.json.

```json
{
  "name": "foo",
  "version": "0.1.0",
  "devDependencies": {
    "handlebars-helper-autolink": "*"
  },
  "keywords": [
    "handlebars-helper-autolink"
  ]
}
```

## Usage

With the helper registered, you may now begin using it in your templates.

**In a "page"**

```html
{{#each pages}}
  <a href="{{autolink}}">{{data.title}}</a>
{{/each}}
```

**In a "layout"**

```html
{{#each pages}}
  <a href="{{autolink}}">{{../title}}</a>
{{/each}}
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](http://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.