"use strict";

const gulp = require("gulp"),
      config = require("./config.json"),
      iconfont = require('gulp-iconfont'),
      iconfontCss = require('gulp-iconfont-css');

gulp.task('iconfont', () => {
  gulp.src([config.dirs.icons.src])
      .pipe(iconfontCss({
          fontName: config.dirs.icons.fontName,
          path: config.dirs.icons.template,
          targetPath: config.dirs.icons.target,
          fontPath: config.dirs.icons.fontPath
      }))
      .pipe(iconfont({
          fontName: config.dirs.icons.fontName,
          // prependUnicode: true,
          formats: config.dirs.icons.formats,
          timestamp: Math.round(Date.now() / 1000),
          normalize: true,
          fixedWidth: true,
          centerHorizontally: true,
      }))
      .on('glyphs', (glyphs, options) => {
          console.log(glyphs, options);
      })
      .pipe(gulp.dest(config.dirs.icons.out));
});
