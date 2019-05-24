### 安装

- yarn add -D babel-loader @babel/core @babel/preset-env
- 在.babelrc 中配置预设值

### 使用 stage 1 语法(类属性), 需要安装插件

- yarn add -D @babel/plugin-proposal-class-properties
- 在.babelrc 中配置插件

### 使用 stage 2 语法(装饰器), 需要安装插件

- yarn add -D @babel/plugin-proposal-decorators
- 在.babelrc 中配置插件

### 使用 Generator 语法, 需要安装插件

- yarn add -D @babel/plugin-transform-runtime
- yarn add @babel/runtime
- 在.babelrc 中配置插件

### 使用 ES6/ES7 语法(实例方法 includes), 需要安装插件

- yarn add @babel/polyfill
- 在.babelrc 中配置"useBuiltIns": "usage"
