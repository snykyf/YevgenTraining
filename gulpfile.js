// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCSS = require("gulp-minify-css");


// Concatenate & Minify JS
gulp.task('src-js', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.min.js'))
		//.pipe(uglify()) //TODO: uncomment it when finish
		.pipe(gulp.dest('dist/js'));
});

// Move libs
gulp.task('move-libs', function () {
	return gulp.src('bower_components/**/**.min.js')
		.pipe(concat('vendor.min.js'))
		.pipe(gulp.dest('dist/vendor'));
});

gulp.task('scripts', ['src-js', 'move-libs']);

// Move HTML and templates
gulp.task('html', function () {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
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
gulp.task('default', ['scripts', 'html', 'sass']);