const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function srcPath(subdir) {
  return path.join(__dirname, 'app', subdir);
}

module.exports = {
  entry: ['./app/index.jsx'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  mode: 'development',

  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      assets: srcPath('assets'),
      components: srcPath('components'),
      containers: srcPath('containers'),
      network: srcPath('network'),
      routes: srcPath('routes'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [new HtmlWebpackPlugin({ template: './index.html', filename: './index.html' })],
};
