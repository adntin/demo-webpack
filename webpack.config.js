const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default; // 压缩图片

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100, // 8192
            },
          },
        ],
      },
      // google.png  5969 bytes
      // c788808252611192bd2ca3dead1e60f1.png  4.17 KiB
      // {
      //   loader: 'image-webpack-loader',
      //   options: {
      //     mozjpeg: {
      //       progressive: true,
      //       quality: 65,
      //     },
      //     // optipng.enabled: false will disable optipng
      //     optipng: {
      //       enabled: false,
      //     },
      //     pngquant: {
      //       quality: '65-90',
      //       speed: 4,
      //     },
      //     gifsicle: {
      //       interlaced: false,
      //     },
      //     // the webp option will enable WEBP
      //     webp: {
      //       quality: 75,
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    // Make sure that the plugin is after any plugins that add images
    // google.png  5969 bytes
    // 8f9327db2597fa57d2f42b4a6c5a9855.png  2.47 KiB
    new ImageminPlugin({
      pngquant: {
        quality: '65-90',
      },
    }),
  ],
};
