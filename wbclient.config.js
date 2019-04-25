const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';
module.exports =
{
  entry:
  {
    client: './src/entryPoints/client.js'
  },
  output:
  {
    path: path.join(__dirname, 'out/client'),
    filename: './public/[name].[chunkhash].js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'html-loader',
          options:
          {
            minimize: !devMode
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        loaders:
        [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:
            {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[local]___[contenthash:base64:5]'
            }
          }
        ]
      },
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin
    (
      {
        filename: './public/[name].[contenthash].css'
      }
    ),
    new HtmlWebpackPlugin
    (
      {
        hash: true,
        template: './src/html/index.html',
        filename: './public/index.html'
      }
    ),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      __devMode__: devMode
    }),
  ],
  watchOptions:
  {
    ignored:
    [
      path.join(__dirname, 'node_modules')
    ]
  }
};
