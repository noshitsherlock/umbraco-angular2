var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify');
    
    
gulp.task('scripts', function() {
  return gulp.src('app/*.js')    
    .pipe(uglify())    
    .pipe(gulp.dest('app/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});