const gulp=require("gulp");
const rename=require("gulp-rename");
const browserify=require("browserify");
const babelify=require("babelify");
const source = require("vinyl-source-stream");
const uglify = require( "gulp-uglify" );
const streamify = require("gulp-streamify");

gulp.task("transpile_js",(cb)=>{ 

	browserify({
		debug: true
	})
		.transform(babelify)
		.bundle()
		.pipe(source("app.js"))
		.pipe(streamify(uglify()))
		.pipe(rename("index.js"))
		.pipe(gulp.dest("./"));

	cb();
});