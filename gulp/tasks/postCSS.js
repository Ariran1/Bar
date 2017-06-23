module.exports = function(){
  $.gulp.task('postCSS',function(){
    // postCSS plugins
    let plugins = [
      require('postcss-import')(),
      require('postcss-cssnext')()
    ]
    return $.gulp.src('./src/style.css')
    .pipe( $.gp.sourcemaps.init() )
    .pipe( $.gp.postcss(plugins) )
    .pipe( $.gp.sourcemaps.write('.') )
    .pipe( $.gulp.dest('./build/css') )
  });
};
