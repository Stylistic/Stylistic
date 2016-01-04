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
      sequence = require('run-sequence');

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
        .pipe(gulp.dest(paths.docs.css));
});

gulp.task('babel', () => {
    return gulp.src(paths.scripts.src)
		    .pipe(sourcemaps.init())
		    .pipe(babel({
			      presets: ['es2015']
		    }))
		    .pipe(concat('all.js'))
		    .pipe(sourcemaps.write('.'))
        //.pipe(uglify())
		    .pipe(gulp.dest(paths.scripts.out))
        .pipe(gulp.dest(paths.docs.js));
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
});

gulp.task('default', ['watch', 'copy', 'babel', 'stylus']);
