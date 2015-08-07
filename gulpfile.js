var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');

// Paths
var jsPath = 'src/js/**/**/*.js';
var htmlDirectivesPath = [
	'src/js/directives/championship/*.html',
	'src/js/directives/championships/*.html',
	'src/js/directives/match/*.html',
	'src/js/directives/matches/*.html',
	'src/js/directives/team/*.html',
	'src/js/directives/teams/*.html',
	'src/js/directives/navigation/*.html'
];
var htmlIndexPath = 'src/index.html';
var sassPath = 'src/sass/main.scss';
var vendorJsPath = 'bower_components/**/**/**.min.js';
var vendorCssPath = 'bower_components/bootstrap/dist/css/bootstrap.min.css';
var fontsPath = 'bower_components/bootstrap/fonts/**.**';


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

// Move directive templates
gulp.task('html-directives', function () {
	return gulp
		.src(htmlDirectivesPath)
		.pipe(gulp.dest('dist/templates'));
});

gulp.task('html-index', function () {
	return gulp
		.src(htmlIndexPath)
		.pipe(gulp.dest('dist/'));
});

// Compile and minify SASS
gulp.task('sass', function () {
	return gulp
		.src(sassPath)
		.pipe(sass())
		//.pipe(minifyCSS()) TODO: uncomment it when finish
		.pipe(gulp.dest('dist/css/'));
});

// Move fonts
gulp.task('move-fonts', function () {
	return gulp
		.src(fontsPath)
		.pipe(gulp.dest('dist/fonts'));
});

//group tasks
gulp.task('html', ['html-directives', 'html-index']);
gulp.task('js', ['vendor-js', 'src-js']);
gulp.task('css', ['sass', 'vendor-css', 'move-fonts']);

// Run tasks on files changes
gulp.task('watch', function() {
	gulp.watch(jsPath, ['src-js']);
	gulp.watch(htmlDirectivesPath, ['html-directives']);
	gulp.watch(htmlIndexPath, ['html-index']);
	gulp.watch(sassPath, ['sass']);
});

//To run needed gulp tasks for first time
gulp.task('build', ['js', 'html', 'css']);

// Default Task
gulp.task('default', ['build', 'watch']);