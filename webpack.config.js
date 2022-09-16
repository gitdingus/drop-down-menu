const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './drop-down-menu.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /template\.html$/i,
        type: 'asset/source',
      },
    ],
  },
};
