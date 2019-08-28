"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const changed = require("gulp-changed");
const t2 = require("through2");

sass.compiler = require("node-sass");

const ASSETS_FOLDER_PATH = "../assets/";

gulp.task("sass", function() {
  return gulp
    .src("sass/**/*.scss.liquid")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(rename("application.scss.liquid"))
    .pipe(
      t2.obj((chunk, enc, cb) => {
        let date = new Date();
        chunk.stat.atime = date;
        chunk.stat.mtime = date;
        cb(null, chunk);
      })
    )
    .pipe(gulp.dest(ASSETS_FOLDER_PATH));
});

gulp.task("js", function() {
  return gulp
    .src("js/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(concat("application.js"))
    .pipe(
      t2.obj((chunk, enc, cb) => {
        let date = new Date();
        chunk.stat.atime = date;
        chunk.stat.mtime = date;
        cb(null, chunk);
      })
    )
    .pipe(gulp.dest(ASSETS_FOLDER_PATH))
    .pipe(rename("application.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(ASSETS_FOLDER_PATH));
});

gulp.task("js-vendors", function() {
  return gulp
    .src("js/vendors/*.js")
    .pipe(concat("vendors.min.js"))
    .pipe(
      t2.obj((chunk, enc, cb) => {
        let date = new Date();
        chunk.stat.atime = date;
        chunk.stat.mtime = date;
        cb(null, chunk);
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(ASSETS_FOLDER_PATH));
});

gulp.task("watch", function() {
  gulp.watch("sass/**/*.{scss,liquid}", gulp.series("sass"));
  gulp.watch("js/*.js", gulp.series("js"));
  gulp.watch("js/vendors/*.js", gulp.series("js-vendors"));
});
