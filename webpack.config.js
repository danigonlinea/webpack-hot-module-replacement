const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
  entry: {
    app:   ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:9000', './src/app/app.js']
  },
  devServer: {
    contentBase: './src',
    port: 9000,
    host: 'localhost',
    inline: true,
    hot: true,
    stats: { colors: true}
  },
  output: {
    path: 'src/output/',
    filename: 'app.js',
    publicPath: 'http://localhost:9000/output/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css' // FOR PRODUCTION USE: ExtractTextPlugin.extract('css')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass' // FOR PRODUCTION USE: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file?name=/images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file?name=/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    /*  FOR PRODUCTION USE

     new HtmlWebpackPlugin({
     template: './src/index.html',
     inject: 'body'
     }),
     new ExtractTextPlugin('[name].css'),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    */
    new webpack.HotModuleReplacementPlugin()
  ]
};


/*
 var ExtractTextPlugin = require("extract-text-webpack-plugin");
 var webpack = require("webpack");
 var path = require("path");

 module.exports = {
 entry: {
 app: './app/app.js',
 librariesJS: [
 'moment/moment.js',
 'lodash/lodash.min.js',
 'angular/angular.min.js'
 ],
 librariesCSS: [
 '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css',
 'font-awesome/css/font-awesome.min.css'
 ]
 },
 module: {
 loaders: [
 {
 test: /\.js$/,
 exclude: /node_modules/,
 loader: 'babel-loader',
 query: {
 presets: ['es2015']
 }
 },
 {
 test: /\.css$/, loader: ExtractTextPlugin.extract('css')
 },
 {
 test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')
 },
 {
 test: /\.(woff|woff2|ttf|eot)(\?.*$|$)/,
 loader: 'file?name=public/fonts/[name].[ext]'
 },
 {
 test: /\.(png|jpg|jpeg|gif)$/,
 loader: 'file?name=public/images/[name].[ext]'
 },
 {
 test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
 loader: 'file?name=public/svg/[name].[ext]'
 }

 ]
 },
 output: {
 path: path.resolve(__dirname, 'output/'),
 filename: "[name].js"
 },

 plugins: [

 new webpack.optimize.CommonsChunkPlugin(['librariesJS', 'app'], 'scripts-[name].js'),
 new ExtractTextPlugin("[name].css", {allChunks: true})


 // Minify assets.
 /!*new webpack.optimize.UglifyJsPlugin({
 compress: {
 warnings: false // https://github.com/webpack/webpack/issues/1496
 }
 })*!/
 ]

 };*/
