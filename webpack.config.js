const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./app/index.jsx"],
	output: {
		path: path.join(__dirname, "www"),
		filename: "bundle.js",
		publicPath: "/",
	},

  mode: "development",
  
  devServer: {
      historyApiFallback: true,
  },
  
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
  },

  plugins: [
		new HtmlWebpackPlugin({ template: "./index.html", filename: "./index.html" })
	],
};