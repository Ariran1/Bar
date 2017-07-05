module.exports = function() {
  $.gulp.task('fonts', function() {
    return $.gulp.src('./src/layout/fonts/*')
      .pipe($.gulp.dest('./build/fonts'))
  })
};
