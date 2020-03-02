
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // добавили плагин
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:  [
          {
         loader: MiniCssExtractPlugin.loader, 
          options: {
            outputPath: "css",
            publicPath: "css",
          },
        },
          'css-loader', 'postcss-loader',
        ] // добавили минификацию CSS,
        
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
        },
      {
        
        test: /\.(PNG|png|jpg|gif|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
        outputPath: "images",
        publicPath: "images",
              name: 'images/[contenthash].[ext]',
             
            }
          }
        ]
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: 'style.[contenthash].css',
    }),
  
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index__second-page.html',
      filename: 'index__second-page.html'
    }),
    
    new WebpackMd5Hash()
  ]
};