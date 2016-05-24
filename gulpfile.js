"use strict";

const gulp = require('gulp'),
      config = require("./gulp/config.json");

require("./gulp/docs");
require("./gulp/iconfont");
require("./gulp/scripts");
require("./gulp/stylus");



gulp.task('watch', ["default"], () => {
    gulp.watch(config.dirs.styles.watch, ['stylus', 'docs']);
    gulp.watch(config.dirs.scripts.watch, ['babel', 'docs']);
    gulp.watch(config.dirs.icons.watch, ['iconfont', 'docs']);
    gulp.watch(config.dirs.docs.styles.watch, ['doc_stylus']);
    gulp.watch(config.dirs.docs.templates.watch, ['templates']);
});

gulp.task('default', ["stylus", "babel", "iconfont", "docs", "serve"]);
