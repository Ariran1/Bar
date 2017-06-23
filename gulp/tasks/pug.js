module.exports = function() {
  $.gulp.task('pug',function(){
    return $.gulp.src('./src/index.pug')
      // .pipe(rigger())
      .pipe($.gp.pug({pretty: true}))
      .pipe($.gulp.dest('./build/'));
  })
};
