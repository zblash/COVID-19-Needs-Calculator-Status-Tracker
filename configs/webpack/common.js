/* eslint-disable @typescript-eslint/no-var-requires */
// shared config (dev and prod)
const { resolve } = require('path');
const alias = require('./alias');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias,
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'sass-loader'],
      },
    ],
  },
  plugins: [new CheckerPlugin(), new HtmlWebpackPlugin({ template: 'index.html.ejs' })],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
