// Webpack configuration provided by LearnCode.academy (https://www.youtube.com/user/learncodeacademy)
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {

  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@config': path.resolve(__dirname, 'src', 'config'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@services': path.resolve(__dirname, 'src', 'services'),
    }
  },

  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./index",

  module: {
    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }

    ]
  },

  devServer: {
    disableHostCheck: true,
    host: '127.0.0.1',
    port: 8080
  },


  output: {
    path: __dirname + "/public/js/",
    publicPath: "/js/",
    filename: "app.min.js"
  },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};