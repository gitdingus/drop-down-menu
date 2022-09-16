const path = require('path');

module.exports = {
  mode: 'production',
  entry: './drop-down-menu.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      type: 'umd',
    },
  },
  devtool: 'eval-source-map',
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
