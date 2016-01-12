"use strict";

const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      stylus = require('gulp-stylus'),
      stylint = require('gulp-stylint'),
      del = require('del'),
      fs = require('node-fs-extra'),
      sequence = require('run-sequence'),
      jade = require('jade'),
      gulpJade = require('gulp-jade'),
      connect = require('gulp-connect');

let locals = {
  version: 'v0.1.0-alpha.2'
};

const paths = {
  styles  : {
    src: __dirname + '/styl/stylistic.styl',
    out: __dirname + '/dist/css/'
  },
  scripts : {
    src: __dirname + '/js/*.js',
    out: __dirname + '/dist/js'
  },
  fonts   : {
    src: __dirname + '/fonts',
    out: __dirname + '/dist/fonts'
  },
  docs    : {
    css: __dirname + '/docs/dist/css',
    fonts: __dirname + '/docs/dist/fonts',
    js: __dirname + '/docs/dist/js'
  }
};

gulp.task('stylus', () => {
    gulp.src(paths.styles.src)
        .pipe(stylint())
        .pipe(stylint.reporter())
        .pipe(sourcemaps.init())
        .pipe(stylus({
            'include css': true,
            url: {
              name: 'b64url',
              limit: false
            }
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.out))
//        .pipe(gulp.dest(paths.docs.css))
        .pipe(connect.reload());
});

gulp.task('babel', () => {
    return gulp.src(paths.scripts.src)
		    .pipe(sourcemaps.init())
		    .pipe(babel({
			      presets: ['es2015']
		    }))
		    .pipe(concat('stylistic.js'))
		    .pipe(sourcemaps.write('.'))
        //.pipe(uglify())
		    .pipe(gulp.dest(paths.scripts.out))
        .pipe(gulp.dest(paths.docs.js))
        .pipe(connect.reload());
});

gulp.task('templates', () => {
  gulp.src('./docs/jade/**/*.jade')
      .pipe(gulpJade({
        jade: jade,
        locals: locals,
        pretty: true
      }))
      .pipe(gulp.dest('./docs'))
      .pipe(connect.reload());
});

gulp.task('doc_stylus', () => {
  gulp.src('./docs/css/site.styl')
      .pipe(stylint())
      .pipe(stylint.reporter())
      .pipe(sourcemaps.init())
      .pipe(stylus({
          'include css': true,
          url: {
            name: 'b64url',
            limit: false
          }
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./docs/css/'))
      .pipe(connect.reload());
});

gulp.task('serve', () => {
  connect.server({
    root: './docs',
    livereload: true
  });
});

gulp.task('copy', () => {
  fs.copy(paths.fonts.src, paths.fonts.out);
  fs.copy(paths.fonts.src, paths.docs.fonts);
});

gulp.task('clean', () => {
  del(['./dist/css/**', './dist/js/**', './dist/fonts/**']);
});

gulp.task('watch', () => {
    gulp.watch('./styl/**/*', ['stylus']);
    gulp.watch('./js/**/*', ['babel']);
    gulp.watch('./docs/css/*.styl', ['doc_stylus']);
    gulp.watch([__dirname + '/docs/jade/**/*.jade'], ['templates']);
});

gulp.task('default', ['watch', 'copy', 'babel', 'stylus', 'templates', 'doc_stylus', 'serve']);
