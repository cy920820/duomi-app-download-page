# 多米生活 - app下载页

## 项目目录结构

```shell
.
├── README.md
├── config
│   ├── gulp.config.js
│   ├── gulp.dev.js
│   ├── gulp.init.js
│   └── gulp.prod.js
├── gulpfile.js
└── package.json
```

## 开发流程

克隆项目到本地

```shell
git clone git@github.com:Cui-y/gulp-work.git my-project
cd my-project
```

安装依赖

> 要求node版本:  ^6.14.0  ||  ^8.10.0  ||  >=9.10.0

```shell
yarn install
```

初始化项目目录

```shell
yarn run init
```

本地开发

```shell
yarn start
```

生产上线

```shell
yarn build
```

语法检查

```shell
yarn lint --fix
```

## 协议

MIT
