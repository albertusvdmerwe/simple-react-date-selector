const gulp=require('gulp');
const sass=require('gulp-sass');
const rename=require('gulp-rename');
const browserify=require('browserify');
const babelify=require('babelify');
const source = require('vinyl-source-stream');
const uglify = require( 'gulp-uglify' );
const streamify = require('gulp-streamify');

gulp.task('transpile_js',cb=>{
    browserify({
        entries: './example/example.js',
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('example.js'))
        .pipe(streamify(uglify()))
        .pipe(rename('example.min.js'))
        .pipe(gulp.dest('./example/dist'));
    cb();
});


gulp.task('transpile_styles',cb=>{
    gulp.src('./example/example.scss')
    .pipe(sass())
    .pipe(rename('example.css'))
    .pipe(gulp.dest('./example/dist'));
    cb();
});

gulp.task('watcher',()=>{
    gulp.watch('./example/example.scss',['transpile_styles']);
    gulp.watch('./example/example.js',['transpile_js']);
});