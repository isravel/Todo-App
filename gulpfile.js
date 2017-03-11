var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src/dummy/css'));
});

gulp.task('minify-css', function() {
    return gulp.src('./src/dummy/css/*.css')
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/assets/css'));		
});

gulp.task('watch', function() {
    gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
    gulp.watch('./src/dummy/css/**/*.css', ['minify-css']);
});
