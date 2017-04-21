/*

npm i -save-dev gulp
npm i -save-dev gulp-sass
npm i -save-dev gulp-clean-css
npm i -save-dev gulp-autoprefixer
npm i -save-dev browser-sync

*/


var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./App/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
});

gulp.task('sass', function() {
    return gulp.src("./App/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('./App/dummy/css'))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', function() {
    return gulp.src('./App/dummy/css/*.css')
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./App/css'));
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./App"
    });
    gulp.watch("./App/scss/*.scss", ['sass']);
    gulp.watch('./App/dummy/css/**/*.css', ['minify-css']);
    gulp.watch("./App/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
