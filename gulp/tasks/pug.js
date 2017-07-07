module.exports = function() {
  $.gulp.task('pug',function(){
    return $.gulp.src(['./src/index.pug','./src/iconsPreview.pug'])
      .pipe($.gp.pug({pretty: true}))
      .pipe($.gulp.dest('./build/'));
  })
};
