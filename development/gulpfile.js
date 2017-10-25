var 	gulp			= require('gulp'),
		sass			= require('gulp-sass'),
		autoprefixer	= require('gulp-autoprefixer'),
		cleanCSS		= require('gulp-clean-css'),
		rename			= require('gulp-rename'),
		browserSync		= require('browser-sync').create(),
    	rigger 		    = require("gulp-rigger"),
    	plumber 	    = require("gulp-plumber"),
    	removeComments  = require('gulp-strip-css-comments'),
    	cssnano         = require("gulp-cssnano"),
		uglify          = require('gulp-uglify'),
		config 			= require('./config');

gulp.task('browser-sync', ['styles','js'], function() {
	browserSync.init({
		proxy: config.server,
		notify: false,
		open: false
	});
});

gulp.task('styles', function () {
	gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('../'))
		.pipe(browserSync.stream());
});

gulp.task("js", function () {
    gulp.src('js/*.js')
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest('../js'))
        .pipe(uglify())
        .pipe(removeComments())
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest('../js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("images", function () {
    gulp.src('i/*')
        .pipe(gulp.dest('../i'));
});


gulp.task('watch', function () {
	gulp.watch(['sass/*.scss','node_modules/bootstrap/scss/*.scss'], ['styles']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('../*.php').on('change', browserSync.reload);
	gulp.watch('i/*',['images']);
});
console.log('sasl')
gulp.task('default', ['browser-sync', 'watch']);