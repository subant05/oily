var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');
var concat = require('gulp-concat');
var buble =  require('gulp-buble');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var riot = require('gulp-riot');
 
const paths = {
  styles: {
    src: 'less/**/*.less',
    dest: 'public/style/'
  },
  scripts: {
    src: 'javascript/**/*.js',
    dest: 'public/js/'
  }
  , icons:{
    src:'less/icons/**/*'
    , dest:'public/style/icons/'
  }
  , tags:{
    src:'tags/**/*'
    , dest:'public/components/'
  }
};
 
/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}
 
/*
 * Define our tasks using plain functions
 */
function icons(){
  return gulp.src(paths.icons.src)
  .pipe(gulp.dest(paths.icons.dest));
}
function styles() {
  return gulp.src('less/oily.less' )
    .pipe(less())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}
function scripts() {
  return gulp.src('javascript/app.js', { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(webpack( {
      mode: "development",
      module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
      }
    }))
    .pipe(uglify())
    .pipe(concat('oily.min.js'))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest));
}
function riotTask(){
   return gulp.src([paths.tags.src])
        .pipe(riot({type:"es6"}))
        .pipe(buble())
        .pipe(uglify())
        .pipe(concat('oily-components.js'))
        .pipe(gulp.dest(paths.tags.dest));
} 


function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.icons.src, icons);
  gulp.watch(paths.tags.src, riotTask);
}
 
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
 
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts));
 
/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);