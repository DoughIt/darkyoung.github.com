var fileinclude = require('gulp-file-include'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    gulp = require('gulp');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('compressCss', function () {
    gulp.src('src/css/*.scss').pipe(sass())
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('fileInclude', function () {
    gulp.src(['src/html/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/html/'));
});

gulp.task('indexInclude', function () {
    gulp.src(['src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('default', ['indexInclude', 'fileInclude', 'compressCss']);
