### 处理css

- yarn add -D css-loader style-loader
- css-loader 解析@import, url路径
- style-loader 把css插入页面的head标签中
- yarn start 演示

### 处理less

- yarn add -D less less-loader
- less-loader 需要less解析
- sass-loader 需要node-sass解析
- stylus-loader 需要stylus解析
- yarn start 演示

### 抽离css

- yarn add -D mini-css-extract-plugin
- 把 style-loader 替换成 MiniCssExtractPlugin.loader

### 添加浏览器前缀(webkit)

- yarn add -D postcss-loader autoprefixer
- 在webpack.config.js中, 添加 postcss-loader 配置
- 在postcss.config.js中, 添加 autoprefixer 配置

### 压缩css
- 在webpack.config.js中, 把mode改成production, 这样只会压缩js, 不会压缩css
- yarn add -D optimize-css-assets-webpack-plugin
- 如果只添加optimize-css-assets-webpack-plugin插件, 那么只会压缩css, 不会压缩js
- yarn add -D terser-webpack-plugin
- 所以还要添加terser-webpack-plugin插件, 只有这两个插件同时存在时, 才会同时压缩js和css