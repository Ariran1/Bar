module.exports = function() {
  $.gulp.task('images', function() {
    return $.gulp.src(['./src/productCard/images/*.png','./src/productCard/images/*.jpg'])
    .pipe($.gulp.dest('./build/images'))
  })
};
