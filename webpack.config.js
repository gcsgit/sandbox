const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist/public',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new CopyWebpackPlugin([ 
      { from: 'src/public' }, 
      { from: 'src/server.js', to: '../server.js' } 
    ])
  ],
  devServer: {
    contentBase: './dist/public'
  }
}
