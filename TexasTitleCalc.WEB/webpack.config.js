var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');

const ROOT = path.resolve(__dirname, '..');

console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');
console.log(ROOT);

module.exports = {
  entry: path.resolve(__dirname, 'src/main.ts'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:63995',
        secure: false
      }
    }
  },
  output: {
    path: ROOT + '/wwwroot/',
    filename: 'dist/[name].[hash].bundle.js',
    chunkFilename: 'dist/[id].[hash].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.component.ts$/, loaders: 'angular2-template-loader' },
      { test: /\.ts$/, loaders: 'awesome-typescript-loader' },
      { test: /\.html$/, loaders: 'html-loader' },
      { test: /\.css$/, loaders: 'css-loader' },
      { test: /\.css$/, loaders: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" }) },
      {
        test: /\.scss$/,
        include: path.join(ROOT, 'angularApp/styles'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
        parser: {
          system: true
        }
      },
      {
        test: /\.scss$/,
        exclude: path.join(ROOT, 'angularApp/styles'),
        use: ['raw-loader', 'sass-loader'],
        parser: {
          system: true
        }
      },

    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: rxPaths()
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new CleanWebpackPlugin(['./wwwroot/dist', './wwwroot/assets'], {
      root: ROOT
    })
  ]
};