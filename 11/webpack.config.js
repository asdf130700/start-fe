const HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
