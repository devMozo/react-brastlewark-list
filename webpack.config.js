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

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

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
      utils: srcPath('utils'),
      context: srcPath('context'),
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
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: './index.html', filename: './index.html' })],
};
