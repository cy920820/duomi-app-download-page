/**
 * gulp 基础配置 - 目录结构
 */

const SRC_DIR = './src/'
const DIST_DIR = './dist/'
// const DIST_FILES = DIST_DIR + '**'

module.exports = {
  src: SRC_DIR,
  dist: DIST_DIR,
  // dist_files: DIST_FILES,
  html: {
    dir: SRC_DIR,
    src: SRC_DIR + '*.html',
    dist: DIST_DIR
  },

  css: {
    dir: SRC_DIR + 'css',
    src: SRC_DIR + 'css/**/*.css',
    dist: DIST_DIR + 'css'
  },

  stylus: {
    dir: SRC_DIR + 'stylus',
    src: SRC_DIR + 'stylus/**/*.styl',
    dist: DIST_DIR + 'css'
  },

  js: {
    dir: SRC_DIR + 'js',
    src: SRC_DIR + 'js/*.js',
    dist: DIST_DIR + 'js'
  },

  vendor: {
    dir: SRC_DIR + 'js/vendor',
    src: SRC_DIR + 'js/vendor/**/*.js',
    dist: DIST_DIR + 'js/vendor'
  },

  img: {
    dir: SRC_DIR + 'images',
    src: SRC_DIR + 'images/**/*',
    dist: DIST_DIR + 'images'
  },

  assets: {
    dir: SRC_DIR + 'assets',
    src: SRC_DIR + 'assets/**/*',
    dist: DIST_DIR + 'assets'
  }
}
