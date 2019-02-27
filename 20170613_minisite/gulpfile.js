require("babel-polyfill");
var gulp = require('gulp'),
    //connect = require('gulp-connect-multi')(),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    //rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    //concat = require('gulp-concat'),
    //coffee = require('gulp-coffee'),
    plumber = require('gulp-plumber');
    //imagemin = require('gulp-imagemin'),
    //cache = require('gulp-cache'),
    //del = require('del');

//root 資料夾名稱
var folder = 'smart',
    dist = '/dist';

//清除檔案
// gulp.task('clean', function () {
//     'use strict';
//     return del(['./' + folder + dist + '/Styles/*', './' + folder + dist + '/Scripts/*']);
// });

//建立伺服器
gulp.task('webserver', function() {
    gulp.src('./' + folder + dist )
    .pipe(webserver({
        host: '0.0.0.0',
        port: 8080,
        livereload: true,
        open: 'http://localhost:8080/'
    }));
});

//sass編譯
gulp.task('sass', function () {
    'use strict';
    gulp.src('./' + folder + '/_sass/*.sass')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded', //無壓縮: expanded, 壓縮: compressed
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(autoprefixer({browsers: ['> 1%', 'IE 8', 'last 2 versions']}))
        //.pipe(gulp.dest('./' + folder + dist + '/Styles'))
        //.pipe(rename({suffix: '.min'}))
        .pipe(minifycss()) //壓縮
        .pipe(gulp.dest('./' + folder + dist))
});


//js 檢查 + 壓縮
gulp.task('js', function () {
    'use strict';
    return gulp.src('./' + folder + '/_js/*.js')
        .pipe(plumber())
        .pipe(jshint()) //ES6除錯，每支JS檔加入: /*jshint esversion: 6 */
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(gulp.dest('./' + folder + dist + '/Scripts'))
        //.pipe(rename({suffix: '.min'}))
        .pipe(uglify()) //壓縮
        .pipe(gulp.dest('./' + folder + dist))
});

//html 更改reload
gulp.task('html', function () {
    'use strict';
    gulp.src('./' + folder + dist + '/*.html')
});

//圖片壓縮
// gulp.task('img', function () {
//     'use strict';
//     return gulp.src('./' + folder + '/_img')
//         .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
//         .pipe(gulp.dest('./' + folder + dist + '/Images'));
// });


gulp.task('default', ['webserver', 'watch', 'sass', 'js', 'html']);


//watch事件
gulp.task('watch', function () {
    'use strict';
    gulp.watch('./' + folder + '/_sass/*.sass', ['sass']);
    gulp.watch('./' + folder + '/_js/*.js', ['js']);
    gulp.watch('./' + folder + dist + '/*.html', ['html']);
    //gulp.watch('./' + folder + '/_img', ['img']);
});

