const path = require('path');

module.exports = {
  mode: 'development',
  entry: 'drop-down-menu.js',
  output: {
    filename: 'drop-down-menu.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        type: 'asset/source',
      },
    ],
  },
};
