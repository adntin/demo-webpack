// webpack 是用node写出来的

const path = require('path');

// console.log(__dirname);
// console.log(path.resolve('dist'));
// console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  mode: 'development', // 打包模式, development, production
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 路径必需是绝对路径
  },
};
