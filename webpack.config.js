const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css
const TerserJSPlugin = require('terser-webpack-plugin'); // 压缩js
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css

module.exports = {
  mode: 'production', // development, production
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true,
      }), // 压缩js
      new OptimizeCSSAssetsPlugin({}) // 压缩css
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    // progress: true,
    contentBase: './dist',
    compress: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      // loader执行顺序, last to first
      use: [{
        loader: 'style-loader',
        options: {
          insertAt: 'top', // 插入head标签的最上面 
        }
      },
        'css-loader',
        'postcss-loader',
      ]
    }, {
      test: /\.less$/,
      use: [
        // 'style-loader', // 插入到html中
        MiniCssExtractPlugin.loader, // 抽离成css文件
        'css-loader',
        'postcss-loader',
        'less-loader',
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // 压缩html
      minify: {
        collapseWhitespace: true, // 折叠空行
      },
      // hash: true, // 引用资源添加问号hash, 如果文件名称有hash, 则不需要此配置
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
