const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 开发服务器配置
  devServer: {
    port: 3000, // 端口号
    progress: true, // 进度条
    contentBase: './dist', // 告诉服务器从哪个目录中提供内容(根目录)
    open: true, // server启动后打开浏览器
    compress: true, // 一切服务都启动gzip压缩
  },
};
