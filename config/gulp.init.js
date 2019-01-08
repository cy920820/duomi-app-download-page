var gulp = require('gulp')
var mkdirp = require('mkdirp')
var config = require('./gulp.config.js')

/**
 * 初始化项目结构
 */
function init() {
  gulp.task('init', function () {
    var dirs = [config.html.dir, config.assets.dir, config.css.dir, config.stylus.dir, config.js.dir, config.vendor.dir, config.img.dir]
    dirs.forEach(dir => {
      mkdirp.sync(dir)
    })
  })
}

module.exports = init
