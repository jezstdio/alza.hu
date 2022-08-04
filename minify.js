const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');
 
// Using UglifyJS with wildcards
minify({
  compressor: uglifyjs,
  input: './scripts/*.js',
  output: 'all_in_one.min.js',
  callback: function(err, min) {}
});