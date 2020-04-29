"use strict";

// more info:
// https://github.com/svg/svgo/tree/master/plugins

var config   = require('./config.json');
var gulp     = require('gulp');

var imagemin = require('gulp-imagemin');
var rename   = require("gulp-rename");


gulp.task('default', function () {
  return gulp
    .src( config.src + '/*' )
    .pipe( imagemin(
      { verbose: true }
    ))
    .pipe( rename({
      suffix: config.suffix
    }) )
    .pipe( gulp.dest(config.dest) );
});
