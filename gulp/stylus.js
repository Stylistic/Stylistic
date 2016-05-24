"use strict";

const gulp = require("gulp"),
      config = require("./config.json"),
      stylus = require('gulp-stylus'),
      poststylus = require('poststylus'),
      stylint = require('gulp-stylint');

gulp.task('stylus', () => {
    gulp.src(config.dirs.styles.src)
        .pipe(stylint())
        .pipe(stylint.reporter())
        .pipe(stylus({
            use: [
                poststylus([
                  'postcss-cssnext',
                  'postcss-flexibility'
                ])
            ]
        }))
        .pipe(gulp.dest(config.dirs.styles.out));
});
