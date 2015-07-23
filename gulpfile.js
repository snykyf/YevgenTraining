// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCSS = require("gulp-minify-css");


// Concatenate & Minify JS
gulp.task('scripts', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Move HTML
gulp.task('templates', function () {
	return gulp.src('src/templates/*.html')
		.pipe(gulp.dest('dist/templates'));
});

// Compile and minify SASS
gulp.task('sass', function () {
	return gulp.src('src/sass/main.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css/'));
});

// Default Task
gulp.task('default', ['scripts', 'templates', 'sass']);