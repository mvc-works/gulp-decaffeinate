
var through = require('through2');
var decaffeinate = require('decaffeinate');
var gutil = require('gulp-util');
var path = require('path');
var merge = require('merge');

var PluginError = gutil.PluginError;

module.exports = function (opt) {
  function replaceExtension(path) {
    return gutil.replaceExtension(path, '.js');
  }

  function transform(file, enc, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError('gulp-decaffeinate', 'Streaming not supported'));

    var data;
    var str = file.contents.toString('utf8');
    var dest = replaceExtension(file.path);

    var options = merge({}, opt);

    try {
      data = decaffeinate.convert(str, options);
    } catch (err) {
      return cb(new PluginError('gulp-decaffeinate', err));
    }

    file.contents = new Buffer(data);

    file.path = dest;
    cb(null, file);
  }

  return through.obj(transform);
};