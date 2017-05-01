const gulp = require('gulp');
const sass = require('gulp-sass');
const reload = require('gulp-livereload');



gulp.task('sass', function() {
    gulp.src('theme/skin/frontend/heritagefields/default/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('theme/skin/frontend/heritagefields/default/css/'))
        .pipe(reload());
});



//Watch task
gulp.task('watch',function() {
    reload.listen();
    gulp.watch('theme/skin/frontend/heritagefields/default/sass/**/*.scss',['sass']);
});



gulp.task('default', ['watch']);