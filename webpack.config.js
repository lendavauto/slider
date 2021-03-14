const path = require('path'); // path module to manipulate file paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // webpack plugin

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
          loader: 'babel-loader', // setup babel loader
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader', // svg loader
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // image loader
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
  ],
};
