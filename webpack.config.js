var path = require('path')
var pkg = require('./package.json')
var UglifyjsPlugin = require('uglifyjs-webpack-plugin')
var BannerPlugin = require('webpack').BannerPlugin

module.exports = {
  entry: {
    'extenso': './index.js',
    'extenso.min': './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'extenso',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/i,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new UglifyjsPlugin({
      include: /\.min\.js$/,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new BannerPlugin([
      'Extenso.js ' + pkg.version,
      '© 2015-' + (new Date()).getFullYear() + ' ' + pkg.author,
      'License: ' + pkg.license
    ].join('\n'))
  ]
}
