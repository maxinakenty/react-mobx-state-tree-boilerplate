const autoprefixer = require('autoprefixer');
const short = require('postcss-short');
const flexbugs = require('postcss-flexbugs-fixes');
const customSelectors = require('postcss-custom-selectors');
const selectorNot = require('postcss-selector-not');
const vars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const cssImport = require('postcss-import');

module.exports = () => ({
  plugins: [
    autoprefixer,
    cssImport,
    short,
    flexbugs,
    customSelectors,
    selectorNot,
    mixins,
    nested,
    vars,
  ],
});
