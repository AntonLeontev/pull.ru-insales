const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const plugins = [
  autoprefixer({ overrideBrowserslist: ["last 10 versions"] }),
  cssnano(),
];

function buildStyles() {
  return gulp
    .src("./assets/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/style"));
}

function buildPages() {
  return gulp
    .src("./assets/scss/pages.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/style"));
}

function buildFonts() {
  return gulp
    .src("./assets/scss/fonts.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/style"));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch("./assets/scss/main.scss", buildStyles);
  gulp.watch("./assets/scss/partials/*.scss", buildStyles);
  gulp.watch("./assets/scss/views/*.scss", buildStyles);
  gulp.watch("./assets/scss/fons.scss", buildFonts);
  gulp.watch("./assets/scss/pages.scss", buildPages);
  gulp.watch("./assets/scss/_rights-holders.scss", buildPages);
};
