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
      hb = require('gulp-hb'),
      layouts = require('handlebars-layouts');

layouts.register(hb.handlebars);

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
		    .pipe(concat('stylistic.js'))
		    .pipe(sourcemaps.write('.'))
        //.pipe(uglify())
		    .pipe(gulp.dest(paths.scripts.out))
        .pipe(gulp.dest(paths.docs.js));
});

gulp.task('templates', () => {
  gulp.src('./docs/_hbs/*.{html,hbs}')
      .pipe(hb({
        debug: true,
        data: './docs/_hbs/data/**/*.{js,json}',
        helpers: [
          './docs/_hbs/helpers/*.js',
          './node_modules/handlebars-layouts/index.js'
        ],
        partials: './docs/_hbs/partials/**/*.hbs'
      }))
      .pipe(gulp.dest('./docs'));
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
    gulp.watch(['./docs/_hbs/**/*', './docs/hbs/partials/**/*'], ['templates']);
});

gulp.task('default', ['watch', 'copy', 'babel', 'stylus', 'templates']);
