module.exports = function() {
  $.gulp.task('watch', function(){
    $.gulp.watch('./src/**/*.css',$.gulp.series('postCSS'));
    $.gulp.watch('./src/**/*.pug',$.gulp.series('pug'));
    $.gulp.watch('./src/**/*.js', $.gulp.series('webpack'));
    $.gulp.watch('./src/**/*.png', $.gulp.series('images'));
  });
};
