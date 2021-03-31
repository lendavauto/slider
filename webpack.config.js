const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js', // setup entry point for react
  output: {
    // setup bundler output file
    path: path.join(__dirname, '/dist'), // folder
    filename: 'index_bundle.js', // output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // look for js and jsx files
        exclude: /node_modules/, // exclude node modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mov|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // setup custom template
    }),
    new FaviconsWebpackPlugin('./src/favicon-32x32.png'),
  ],
};
