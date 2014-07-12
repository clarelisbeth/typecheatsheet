// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'));
});


// Build dist
gulp.task('build_styles', function () {
    gulp.src('styles/*.css')
        .pipe(gulp.dest('dist/styles'));
});

// Build dist
gulp.task('build_images', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            optimizationLevel: 4,
            //svgoPlugins: [{removeViewBox: false}],
            //use: [pngcrush()]
        }))
        .pipe(gulp.dest('dist/images'));
});
// Build dist
gulp.task('build_html', function () {
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('styles/*/*.scss', ['sass']);
    gulp.watch('styles/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'build_html', 'build_styles']);







