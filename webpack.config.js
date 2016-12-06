const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/happo.jsx'),

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'happo.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: /src\//,
      },
    ],
  }
}
