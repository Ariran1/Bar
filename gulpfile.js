global.$ = {
  paths: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  webpack: require('webpack'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
}

$.paths.task.forEach(function(item){
  require(item)();
});


$.gulp.task('default', $.gulp.series(
                                    'clean',
                                    $.gulp.parallel('postCSS','pug','webpack','images'),
                                    $.gulp.parallel('watch','serve')
                                  )
                                );
