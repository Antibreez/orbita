// const gulp = require("gulp");
import gulp from 'gulp'

export default function copy(done) {
  gulp
    .src(['source/fonts/**/*', 'source/*.ico', 'source/animations/**/*', 'source/original/**/*'], {
      base: 'source',
    })
    .pipe(gulp.dest('build'))
  done()
}
