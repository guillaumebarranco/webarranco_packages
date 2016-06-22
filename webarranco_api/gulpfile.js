"use strict";

const gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	eslint = require('gulp-eslint')
;
 
gulp.task('test', function () {
	return gulp.src('test/routes/test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it 
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function () {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
