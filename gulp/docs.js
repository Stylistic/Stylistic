"use strict";

const gulp = require("gulp"),
      config = require("./config.json"),
      pug = require("gulp-pug"),
      connect = require("gulp-connect"),
      stylus = require('gulp-stylus'),
      poststylus = require('poststylus'),
      stylint = require('gulp-stylint'),
      fs = require("node-fs-extra"),
      del = require("del");

gulp.task('templates', () => {
  gulp.src(config.dirs.docs.templates.src)
      .pipe(pug({
        locals: config.templateLocals,
        pretty: true
      }))
      .pipe(gulp.dest(config.dirs.docs.templates.out))
      .pipe(connect.reload());
});

gulp.task('doc-styles', () => {
    gulp.src(config.dirs.docs.styles.src)
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
        .pipe(gulp.dest(config.dirs.docs.styles.out))
        .pipe(connect.reload());
});


gulp.task('serve', () => {
  connect.server({
    root: 'docs',
    livereload: true
  });
});

gulp.task('copy', ["templates", "doc-styles"], () => {
  fs.copy("dist", "docs/dist");
});

gulp.task('clean', () => {
  del(['dist/css/**', 'dist/js/**', 'dist/fonts/**']);
});

gulp.task("docs", ["copy"]);
