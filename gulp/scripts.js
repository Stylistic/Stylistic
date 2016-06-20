"use strict";

const gulp = require("gulp"),
      config = require("./config.json"),
      babel = require("gulp-babel"),
      concat = require("gulp-concat"),
      sourcemaps = require("gulp-sourcemaps");

gulp.task('babel', () => {
    return gulp.src(config.dirs.scripts.src)
		    .pipe(sourcemaps.init())
		    .pipe(babel({
			      presets: ['es2015']
		    }))
		    .pipe(concat('stylistic.js'))
		    .pipe(sourcemaps.write('.'))
        // .pipe(uglify())
		    .pipe(gulp.dest(config.dirs.scripts.out));
});
