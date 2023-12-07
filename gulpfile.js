const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function buildStyles() {
  const plugins = [
    autoprefixer({ overrideBrowserslist: ["last 1 version"] }),
    cssnano(),
  ];

  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/style"));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch("./assets/scss/**/*.scss", buildStyles);
};
