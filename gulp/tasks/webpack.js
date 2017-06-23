module.exports = function() {
  $.gulp.task('webpack', function() {
    return $.gulp.src('./src/index.js')
      .pipe($.gp.webpack({
        entry: {
          index: './src/index.js',
        },
          output: {
            filename: './[name].js'
          }
       }))
    .pipe($.gulp.dest('./build/js/'))
  })
};
