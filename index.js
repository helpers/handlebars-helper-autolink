
/**
 * Handlebars Helpers: {{autolink}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

// Node.js
var _ = require('lodash');


// Export helpers
module.exports.register = function (Handlebars, options) {

  var opts  = options;

  /**
   * Generate a relative link from the "current page",
   * to the dest page.
   * @usage: {{autolink}}
   */
  Handlebars.registerHelper('autolink', function(context) {
    context = _.extend(context, opts.data, this);
    return new Handlebars.SafeString(context.relativeLink);
  });
};
