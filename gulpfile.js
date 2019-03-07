var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', function () {
    gulp.src(['src/html/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/html/'));
});

gulp.task('indexinclude', function () {
    gulp.src(['src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});
