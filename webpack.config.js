const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

// contentBase: Where to serve content from (ie, server root)
// contentBasePublicPath: Where to server static content from
// publicPath: "/dist",
// contentBase: path.join(__dirname, 'public'),
 
module.exports = {
 devServer: {
     host: 'localhost',
     contentBase: "./dist",
     hot: true,
     port: 8079,
 },
  mode: 'development',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),   
    new ManifestPlugin(),   
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        title: 'injected',
        minify: {
            collapseWhitespace: true,
        },
        hash: true,
        template: './src/index.html',
    })    
  ]
}
 

