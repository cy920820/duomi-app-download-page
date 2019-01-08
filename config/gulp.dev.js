/**
 * @author cuiyang
 * @environment development
 * dev build：
 *  1. 便于调试 - 加入sourcemap，映射源文件
 *  2. 提高开发效率 - 加入livereload，实现文件监控，自动化编译
 */

const gulp = require('gulp')
const stylus = require('gulp-stylus')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const config = require('./gulp.config')
const sourcemaps = require('gulp-sourcemaps')

function dev() {
  /**
   * HTML处理
   */
  gulp.task('html:dev', function () {
    return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dist))
    .pipe(reload({
      stream: true
    }))
  })

  /**
   * assets文件夹下的所有文件处理
   */
  gulp.task('assets:dev', function () {
    return gulp.src(config.assets.src)
    .pipe(gulp.dest(config.assets.dist))
    .pipe(reload({
      stream: true
    }))
  })

  /**
   * CSS样式处理
   */
  gulp.task('css:dev', function () {
    return gulp.src(config.css.src)
    .pipe(gulp.dest(config.css.dist))
    .pipe(reload({
      stream: true
    }))
  })

  /**
   * stylus样式处理
   */
  gulp.task('stylus:dev', function () {
    return gulp.src(config.stylus.src)
    .pipe(stylus())
    .pipe(gulp.dest(config.stylus.dist))
    .pipe(reload({
      stream: true
    }))
  })

  /**
   * js处理
   */
  gulp.task('js:dev', function () {
    return gulp.src(config.js.src)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.js.dist))
    .pipe(reload({
      stream: true
    }))
  })

  /**
  * vendor处理
  */
  gulp.task('vendor:dev', function () {
    return gulp.src(config.vendor.src)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(config.vendor.dist))
    .pipe(reload({
      stream: true
    }))
  })

  /**
   * 图片处理
   */
  gulp.task('images:dev', function () {
    return gulp.src(config.img.src)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.img.dist))
    .pipe(reload({
      stream: true
    }))
  })

  // 开启本地服务
  gulp.task('dev', ['html:dev', 'css:dev', 'stylus:dev', 'js:dev', 'vendor:dev', 'images:dev'], function () {
    browserSync.init({
      server: {
        baseDir: config.dist // 服务根目录
      },
      notify: false
    })

    // 开启监听
    // Watch .html files
    gulp.watch(config.html.src, ['html:dev'])
    // Watch .css files
    gulp.watch(config.css.src, ['css:dev'])
    // Watch .scss files
    gulp.watch(config.stylus.src, ['stylus:dev'])
    // Watch assets files
    gulp.watch(config.assets.src, ['assets:dev'])
    // Watch .js files
    gulp.watch(config.js.src, ['js:dev'])
    // Watch .js files
    gulp.watch(config.vendor.src, ['vendor:dev'])
    // Watch image files
    gulp.watch(config.img.src, ['images:dev'])
  })
}

module.exports = dev
