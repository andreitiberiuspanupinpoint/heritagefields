'use strict';



const gulp = require('gulp');
const sass = require('gulp-sass');
const reload = require('gulp-livereload');



gulp.task('sass', function() {
    gulp.src('theme/skin/frontend/heritagefields/default/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['vendor/bower/foundation-sites/scss']
        }))
        .pipe(gulp.dest('theme/skin/frontend/heritagefields/default/css/'))
        .pipe(reload());
});


// Copy js
gulp.task('copyjs', function() {
    gulp.src('vendor/bower/foundation-sites/dist/js/foundation.min.js')
        .pipe(gulp.dest('theme/skin/frontend/heritagefields/default/js/'));
});


//Watch task
gulp.task('watch',function() {
    reload.listen();
    gulp.watch('theme/skin/frontend/heritagefields/default/scss/**/*.scss',['sass']);
});



gulp.task('default', ['watch']);