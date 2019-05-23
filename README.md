### 本地安装, 开发依赖

- yarn add -D webpack webpack-cli

### 零配置

- yarn run webpack
- npx webpack // npm version 5.2+

- 打包(支持模块化)
  添加 commandjs 模块语法
  添加 index.html 并引用 main.js

### 手动配置

- 默认文件 webpack.config.js
- yarn run webpack --config webpack.config.js
- 分析打包后的文件 bundle.js
- 传参数
  - yarn run build --config webpack.config.js // 正确
  - yarn run build -- --config webpack.config.js // 正确, 有警告, 不需要 --
  - npm run build -- --config webpack.config.js // 正确
  - npm run build --config webpack.config.js // 错误, 实际会变成 webpack "webpack.config.js"
