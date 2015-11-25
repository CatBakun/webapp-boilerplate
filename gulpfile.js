var gulp = require('gulp'),
	Server = require('karma').Server,
	jshint = require('gulp-jshint'),
	connect = require('gulp-connect')
  msx = require('gulp-msx');

gulp.task('connect', function() {
  connect.server({
  	root: '.',
  	livereload: true	
  });
});

gulp.task('default', ['connect']);

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/test/unit/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('lint', function() {
  return gulp.src(['./src/**/*.js', 'test/unit/**/*.js', '!test/unit/reports/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('transform-jsx', function() {
  return gulp.src('./src/**/*.jsx')
    .pipe(msx({harmony: true}))
    .pipe(gulp.dest('./src'))
});