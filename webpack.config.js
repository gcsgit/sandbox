const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.[hash].js',
    path: __dirname + '/dist/public',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.(css|scss)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/public/index.html', inject: false }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([ 'dist' ]),
    new CopyWebpackPlugin([ 
      { from: 'src/public' }, 
      { from: 'src/server.js', to: '../server.js' } 
    ])
  ],
  devServer: {
    contentBase: './dist/public',
    hot: true
  }
}
