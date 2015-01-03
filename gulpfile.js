var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower');
var htmlmin = require('gulp-html-minifier');

gulp.task('js', function () {
    gulp.src('src/js/**/*.js')  
            .pipe(concat('main.js'))
//            .pipe(uglify('main.js'))
            .pipe(gulp.dest('dist/js'));
});

gulp.task('bower', function () {
    return bower()
            .pipe(gulp.dest('dist/js/lib'))
});

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    gulp.src('./src/less/**/*.less')
            .pipe(less({
                paths: [path.join(__dirname, 'src', 'less', 'includes')]
            }))
            .pipe(gulp.dest('./dist/css'));
});



gulp.task('minify', function() {
  gulp.src('./src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});



gulp.task('default', ['bower','js', 'minify', 'less']);

gulp.task('watch',['default'], function () {    
    gulp.watch('src/**/*.*', ['default']);
});
