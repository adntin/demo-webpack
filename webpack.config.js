const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',
  // 开发服务器配置
  devServer: {
    port: 3000, // 端口号
    progress: true, // 进度条
    contentBase: './dist', // 告诉服务器从哪个目录中提供内容(根目录)
    // open: true, // server启动后打开浏览器
    compress: true, // 一切服务都启动gzip压缩
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // 下面配置可以写在.babelrc中
          // options: {
          //  presets: ['@babel/preset-env'],
          //  plugins: [
          //    ['@babel/plugin-proposal-class-properties', { loose: true }],
          //  ],
          // },
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', // 输出后的文件名称
      // 压缩html
      // minify: {
      //   collapseWhitespace: true, // 折叠空行
      //   // removeAttributeQuotes: true, // 移除双引号, 不建议使用
      // },
      // hash: true, // 引用资源添加问号hash, 不建议使用
    }),
  ],
};
