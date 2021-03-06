var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')


module.exports = {
  entry: ['./src/init.js','./scss/init.scss'],
  output: {
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
	plugins: [
      new ExtractTextPlugin('css/app.css'),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          'window.jQuery': 'jquery'
      })
  ]
};