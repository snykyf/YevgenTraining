var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');

// Paths
var jsPath = 'src/js/**/*.js';
var htmlPath = 'src/**/**/*.html';
var sassPath = 'src/sass/main.scss';
var vendorJsPath = 'bower_components/**/**/**.min.js';
var vendorCssPath = 'bower_components/bootstrap/dist/css/bootstrap.min.css';


// Concatenate & Minify JS
gulp.task('src-js', function () {
	return gulp
		.src(jsPath)
		.pipe(concat('main.js'))
		//.pipe(uglify()) //TODO: uncomment it when finish
		.pipe(gulp.dest('dist/js'));
});

// Move libs
gulp.task('vendor-js', function () {
	return gulp
		.src(vendorJsPath)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/vendor'));
});

gulp.task('vendor-css', function () {
	return gulp
		.src(vendorCssPath)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('dist/vendor'));
});

// Move HTML and templates
gulp.task('html', function () {
	return gulp
		.src(htmlPath)
		.pipe(gulp.dest('dist'));
});

// Compile and minify SASS
gulp.task('sass', function () {
	return gulp
		.src(sassPath)
		.pipe(sass())
		//.pipe(minifyCSS()) TODO: uncomment it when finish
		.pipe(gulp.dest('dist/css/'));
});

// Run tasks on files changes
gulp.task('watch', function() {
	gulp.watch(jsPath, ['src-js']);
	gulp.watch(htmlPath, ['html']);
	gulp.watch(sassPath, ['sass']);
});

//To run needed gulp tasks for first time
gulp.task('build', ['vendor-js', 'src-js', 'html', 'sass', 'vendor-css']);

// Default Task
gulp.task('default', ['build', 'watch']);