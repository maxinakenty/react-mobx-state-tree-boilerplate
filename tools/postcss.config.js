const autoprefixer = require('autoprefixer');
const short = require('postcss-short');
const flexbugs = require('postcss-flexbugs-fixes');
const customSelectors = require('postcss-custom-selectors');
const selectorNot = require('postcss-selector-not');
const vars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const cssImport = require('postcss-import');
const colorFunctions = require('postcss-sass-color-functions');

module.exports = () => ({
  plugins: [
    autoprefixer,
    colorFunctions,
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
