
var gulp       = require('gulp');
var browserify = require("browserify");
var source     = require("vinyl-source-stream");
var uglify     = require("gulp-uglify");
var streamify  = require("gulp-streamify");
var minify     = require('gulp-minify');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var ngAnnotate = require('browserify-ngannotate');
var jetpack    = require('fs-jetpack');

var srcDir     = jetpack.cwd('src');
var distDir    = jetpack.cwd('dist');

gulp.task('build', ['copy', 'concat-css'], function () {

    return browserify('./src/main')
            .transform(ngAnnotate)
            .bundle()
            .pipe(source('app.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(distDir.path()));

});

gulp.task('copy', ['clean'], function () {

    return srcDir.copy('.', distDir.path(), {
            matching: [ 'partial/**/*.html'
                      , 'index.html'
                      , 'svg/**/*.svg'
                      , 'img/**/*.png'
                      ]
    });

});

gulp.task('clean', function () {

    return distDir.remove();

});

gulp.task('juke-css', function () {

    return gulp.src(srcDir.path('styles/**/*.sass'))
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(distDir.path('css')));

});

gulp.task('vendor-css', function () {

    return gulp.src(['node_modules/angular-material/angular-material.min.css'])
            .pipe(gulp.dest(distDir.path('css')))

});
gulp.task('concat-css', ['vendor-css', 'juke-css'], function () {

    gulp.src([
        'dist/css/*.css',
        'dist/css/angular-material.min.css'
    ])
        .pipe(concat('css/style.css'))
        .pipe(gulp.dest(distDir.path()));

});

gulp.task('debug', ['copy', 'concat-css'], function () {

    return browserify('./src/main')
            .transform(ngAnnotate)
            .bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('./dist'));

});
