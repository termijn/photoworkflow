const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const commonConfig = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    __dirname: false
  },
  mode: 'development', // Set to production in final build
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },      
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: { main: './src/js/main.js' }
    },
    commonConfig),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: { gui: './src/js/renderer.js' },
      plugins: [new HtmlWebpackPlugin({template: './src/html/index.html'})]
    },
    commonConfig)
]